import { promises as fs } from 'fs';
import path from 'path';
import { OpenAI } from 'openai';
import config from './.i18nrc.js';

// 初始化 OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// 获取所有需要翻译的文件
async function getAllFiles(dirPath) {
  const files = await fs.readdir(dirPath);
  const allFiles = [];

  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = await fs.stat(filePath);

    if (stat.isDirectory()) {
      const subFiles = await getAllFiles(filePath);
      allFiles.push(...subFiles);
    } else {
      allFiles.push(filePath);
    }
  }

  return allFiles;
}

// 翻译文本
async function translateText(text, targetLanguage) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `You are a professional translator. Translate the following text from ${config.markdown.entryLocale} to ${targetLanguage}. Preserve all markdown formatting and code blocks. Do not translate code content or URLs.`
        },
        {
          role: "user",
          content: text
        }
      ],
      temperature: 0.3,
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error('Translation error:', error);
    throw error;
  }
}

// 处理单个文件的翻译
async function translateFile(filePath, targetLanguage) {
  try {
    // 读取源文件
    const content = await fs.readFile(filePath, 'utf-8');
    
    // 获取相对路径
    const relativePath = path.relative(config.markdown.entry, filePath);
    
    // 创建目标文件路径
    const targetPath = path.join(
      config.markdown.output,
      targetLanguage,
      relativePath
    );

    // 确保目标目录存在
    await fs.mkdir(path.dirname(targetPath), { recursive: true });

    // 翻译内容
    const translatedContent = await translateText(content, targetLanguage);

    // 写入翻译后的文件
    await fs.writeFile(targetPath, translatedContent, 'utf-8');
    
    console.log(`Translated ${filePath} to ${targetPath}`);
  } catch (error) {
    console.error(`Error translating file ${filePath}:`, error);
  }
}

// 主函数
async function main() {
  try {
    // 检查 API key
    if (!process.env.OPENAI_API_KEY) {
      throw new Error('OPENAI_API_KEY environment variable is not set');
    }

    // 获取所有需要翻译的文件
    const files = await getAllFiles(config.markdown.entry);

    // 对每个目标语言进行翻译
    for (const targetLanguage of config.markdown.outputLocales) {
      console.log(`\nTranslating to ${targetLanguage}...`);
      
      // 并行处理所有文件的翻译
      await Promise.all(
        files.map(file => translateFile(file, targetLanguage))
      );
    }

    console.log('\nTranslation completed successfully!');
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

// 运行脚本
main(); 