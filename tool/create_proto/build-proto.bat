:: Compile proto files
:: Added by xiehande on 2024-12-10 
:: 生成proto文件工具
@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion

:: 配置区域
set "OUTPUT_JS=proto.js"
set "OUTPUT_TS=proto.d.ts"
set "OUTPUT_DIR=..\..\assets\scripts\proto"
set "PROTOFILE_DIR=..\..\protofile"
set "PROTO_SOURCE_DIR=D:\work\game\cehua\proto\server"
set "PROTO_ID_SCRIPT_DIR=D:\work\game\cehua\proto"
set "PROTO_ID_SCRIPT=generate_proto_ids.py"
set "PROTO_ID_MAP_FILE=proto_id_map.ts"


:: 检查源协议文件夹是否存在
if not exist "%PROTO_SOURCE_DIR%" (
    echo 错误: 未找到源协议文件夹！路径：%PROTO_SOURCE_DIR%
    pause
    exit /b 1
)

:: 确保目标文件夹存在
if not exist "%PROTOFILE_DIR%" (
    mkdir "%PROTOFILE_DIR%"
)

:: 拷贝协议文件
echo 正在从 %PROTO_SOURCE_DIR% 拷贝协议文件到 %PROTOFILE_DIR% ...
copy /Y "%PROTO_SOURCE_DIR%\*.proto" "%PROTOFILE_DIR%\" >nul
if errorlevel 1 (
    echo 错误: 拷贝协议文件失败！
    pause
    exit /b 1
)
echo 协议文件拷贝完成！

:: 检查是否安装了 Node.js
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo 错误: 未安装 Node.js
    echo 请从 https://nodejs.org/ 下载并安装 Node.js
    pause
    exit /b 1
)

if not exist "%OUTPUT_DIR%" mkdir %OUTPUT_DIR%

:: 检查是否需要安装依赖
if not exist "node_modules\.bin\pbjs.cmd" (
    echo 正在安装依赖...
    call npm install
    if errorlevel 1 (
        echo 错误: 安装依赖失败
        pause
        exit /b 1
    )
)

:: 检查protofile文件夹是否存在
if not exist "%PROTOFILE_DIR%" (
    echo 错误: 未找到 protofile 文件夹！
    pause
    exit /b 1
)

:: 检查文件夹的protofile是否有.proto文件
dir /b "%PROTOFILE_DIR%\*.proto" >nul 2>&1
if errorlevel 1 (
    echo 错误: protofile 文件夹中未找到 .proto 文件！
    pause
    exit /b 1
)

echo 正在处理以下 proto 文件:
for %%f in (%PROTOFILE_DIR%\*.proto) do (
    echo - %%f
)
echo.

:: 创建临时文件列表
set "PROTO_FILES="
for %%f in (%PROTOFILE_DIR%\*.proto) do (
    set "PROTO_FILES=!PROTO_FILES! %%f"
)

echo 正在生成 JS 文件...
call node_modules\.bin\pbjs.cmd -t static-module -w commonjs -o "%OUTPUT_DIR%/%OUTPUT_JS%" %PROTO_FILES%  --keep-case
if errorlevel 1 (
    echo 错误: 生成 JS 文件失败
    echo 请检查 proto 文件语法是否正确
    pause
    exit /b 1
)

echo 正在生成 TypeScript 文件...
call node_modules\.bin\pbts.cmd --main -o "%OUTPUT_DIR%/%OUTPUT_TS%" "%OUTPUT_DIR%/%OUTPUT_JS%"
if errorlevel 1 (
    echo 错误: 生成 TypeScript 文件失败
    pause
    exit /b 1
)

:: 运行 proto ID 映射生成脚本
echo.
echo 正在运行 proto ID 映射生成脚本...

:: 检查 Python 是否安装
where python >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo 错误: 未安装 Python
    echo 请从 https://www.python.org/ 下载并安装 Python
    pause
    exit /b 1
)

if not exist "%PROTO_ID_SCRIPT_DIR%\%PROTO_ID_SCRIPT%" (
    echo 错误: 未找到 %PROTO_ID_SCRIPT%！路径：%PROTO_ID_SCRIPT_DIR%\%PROTO_ID_SCRIPT%
    pause
    exit /b 1
)
python "%PROTO_ID_SCRIPT_DIR%\%PROTO_ID_SCRIPT%"
if errorlevel 1 (
    echo 错误: 运行 %PROTO_ID_SCRIPT% 失败
    pause
    exit /b 1
)
echo %PROTO_ID_SCRIPT% 执行完成！

:: 拷贝 proto_id_map.ts 到 OUTPUT_DIR
echo.
echo 正在拷贝 %PROTO_ID_MAP_FILE% 到 %OUTPUT_DIR% ...
if not exist "%PROTO_ID_SCRIPT_DIR%\%PROTO_ID_MAP_FILE%" (
    echo 错误: 未找到生成的 %PROTO_ID_MAP_FILE%！路径：%PROTO_ID_SCRIPT_DIR%\%PROTO_ID_MAP_FILE%
    pause
    exit /b 1
)
copy /Y "%PROTO_ID_SCRIPT_DIR%\%PROTO_ID_MAP_FILE%" "%OUTPUT_DIR%\" >nul
if errorlevel 1 (
    echo 错误: 拷贝 %PROTO_ID_MAP_FILE% 失败
    pause
    exit /b 1
)
echo %PROTO_ID_MAP_FILE% 拷贝完成！

echo.
echo Proto 文件编译成功！
echo -------------------
echo 生成文件列表：
dir %OUTPUT_DIR% /b
pause