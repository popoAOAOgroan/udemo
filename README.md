# udemo
all about my worked

# 学习搭建前端快速开发环境
Tag： Npm + bower + Grunt + compass&scss + AngulaerJs + Github

Install Dependencies
Step 1
Dowload Node.js https://nodejs.org/en/download/

Step 2
Installing npm & bower 
npm install 
bower install
Behind the scenes this will also call bower install. You should find that you have two new folders in your project.
node_modules - contains the npm packages for the tools we need
app/bower_components - contains the angular framework files

Running Angularjs
It is a node.js tool called http-server. You can start this webserver with npm start but you may choose to install the tool globally:
sudo npm install -g http-server
http-server -a localhost -p 8000


# Grunt
npm install -g grunt-cli
安装好Grunt cli后配置package.json和Gruntfile后就可以使用Grunt来自动化任务脚本了。

自动创建package文件
npm init

安装插件
npm install <module> --save-dev
此命令不光安装了<module>，还会自动将其添加到devDependencies 配置段中，遵循tilde version range格式。

编写Gruntfile自动化脚本
Gruntfile由以下几部分构成：
"wrapper" 函数
项目与任务配置
加载grunt插件和任务
自定义任务

中文官网：http://www.gruntjs.net/getting-started


# Angularjs
Stpe 1 
下载： http://angularjs.org
Stpe 2 
引用：
<script src="http://code.angularjs.org/angular-1.0.1.min.js"></script>
中文官网：http://www.apjs.net/



# Compass + Scss {也可通过Grunt安装Compass}
Compass是Sass的工具库（toolkit）。
使用Compass前需要安装Ruby，因为compass是Ruby开发的
gem install compass
安装compass时，如果没有安装Scss，会把Scss一同安装。
Step 1
创建Compass项目 
compass create myproject
创建完后你会在项目中看见config.rb文件，用来配置你的compass。


# Github
注册GIthub，获取SSH权限

Git 下载：http://git-scm.com/download/
打开git终端，配置用户名和Email
git config --global user.name "Example Surname"
git config --global user.email "your.email@gmail.com"
创建仓库、添加文件和提交更改
git init
git add .
git commit -m "Initial commit"
git log
通过以下命令查看已经存在的远端仓库 
git remote
推送（push）一个分支到远端仓库
git push
参考资料：
http://blog.csdn.net/windows_nt/article/details/24557831
http://blog.csdn.net/dengsilinming/article/details/8000622
