MSBuild ./src/WordIntegrator/WordIntegrator.sln
mkdir build
XCOPY .\src\WordIntegrator\WordIntegrator\bin\Debug\WordIntegrator.dll .\build\  /Y