@DEL /Q dist\*.*
@CALL yarn tsc --build tsconfig.json
@REM CALL yarn webpack --config webpack.config.js
@CALL yarn webpack
