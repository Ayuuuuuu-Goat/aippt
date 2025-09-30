
# 赠与羽鹿的开源 AI 演示助手

我是 Goat，这份项目是送给羽鹿的礼物：把写 PPT 的苦活交给本地运行的 AI，素材不会出门，主题也能随你定。

## 我们已经准备好的事
- 全中文界面，支持自定义模板与多模型（OpenAI、Gemini、Ollama、自建兼容接口）
- 支持上传 PDF、PPTX、TXT，自动提炼大纲与内容
- 一键导出 PPTX / PDF，本地保存，想改随时改
- 模板库与自定义模板编辑器，Goat 风格想换随我
- MCP/REST API 同步可用，二次开发不拦你

## Windows 运行步骤（Docker 版）
1. 安装 [Docker Desktop](https://www.docker.com/products/docker-desktop/) 并启动。
2. 打开 PowerShell，克隆或下载本仓库，切到项目目录：
   ```powershell
   cd C:\path\to\presenton-0.5.15-beta
   ```
3. 运行以下命令（会自动拉官方镜像）：
   ```powershell
   docker run -it --name presenton -p 0914:80 -v "${PWD}\app_data:/app_data" ghcr.io/presenton/presenton:latest
   ```
   第一次执行会稍慢，耐心等模型和依赖就绪。
4. 打开浏览器访问 [http://localhost:0914](http://localhost:0914)。
5. 进入设置页，按照提示填入自己的 API Key（OpenAI / Google / Ollama 等），点“保存配置”。

## Windows 本地运行（想直接调试前端/后端）
1. 安装 Node.js 18+、Python 3.11、`pnpm`（或 `npm`）以及 `pip`。
2. 创建虚拟环境并安装后端依赖：
   ```powershell
   cd C:\path\to\presenton-0.5.15-beta\servers\fastapi
   python -m venv ..\.venv
   ..\.venv\Scripts\Activate.ps1
   pip install uv
   uv sync
   ```
3. 启动 FastAPI：
   ```powershell
   uvicorn api.main:app --reload --host 0.0.0.0 --port 8000
   ```
4. 新开一个终端，启动前端：
   ```powershell
   cd C:\path\to\presenton-0.5.15-beta\servers\nextjs
   pnpm install
   pnpm dev -- -p 914
   ```
5. 浏览器访问 [http://localhost:914](http://localhost:914) 即可预览最新汉化界面。

## 常用配置（环境变量）
- `APP_DATA_DIRECTORY`：存放配置、导出文件的目录，默认为项目根下的 `app_data`。
- `LLM`：`openai` / `google` / `anthropic` / `ollama` / `custom`。
- `OPENAI_API_KEY`、`GOOGLE_API_KEY`、`ANTHROPIC_API_KEY`、`OLLAMA_URL` 等：按需填写自己的模型凭证。
- `IMAGE_PROVIDER`：`dall-e-3` / `gemini_flash` / `pexels` / `pixabay`，配合相应 `API_KEY` 使用。

把这些变量写在 `.env.local` 或系统环境里，启动脚本会自动读取。

## 使用小贴士
- 上传文档后可先在“资料预览”里检查，满意再点“下一步”。
- 模板库支持自定义主题，改完直接保存，所有演示都能复用。
- 若想调用接口，可参考 `servers/fastapi` 的 API（路径 `/api/v1/ppt/...`）。


