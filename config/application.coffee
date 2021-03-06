# For an explanation of the steroids.config properties, see the guide at
# http://guides.appgyver.com/steroids/guides/project_configuration/config-application-coffee/

steroids.config.name = "NextPlex Mobile"

# -- Initial Location --
steroids.config.location = "http://localhost/views/event/index.html"

# -- Tab Bar --
steroids.config.tabBar.enabled = true
steroids.config.tabBar.tabs = [
  {
    title: "Events"
    icon: "icons/Flag@2x.png"
    location: "http://localhost/views/event/index.html"
  },
  {
    title: "Civic Directory"
    icon: "icons/Light_Bulb@2x.png"
    location: "http://localhost/views/civic_organization/index.html"
  }
]

# steroids.config.tabBar.tintColor = "#31323c"
# steroids.config.tabBar.tabTitleColor = "#cccccc"
steroids.config.tabBar.selectedTabTintColor = "#3fa2cf"
# steroids.config.tabBar.selectedTabBackgroundImage = "icons/pill@2x.png"

# steroids.config.tabBar.backgroundImage = ""

# -- Navigation Bar --
steroids.config.navigationBar.tintColor = "#31323c"
steroids.config.navigationBar.titleColor = "#ffffff"
steroids.config.navigationBar.buttonTintColor = "#3fa2cf"
steroids.config.navigationBar.buttonTitleColor = "#3fa2cf"

# steroids.config.navigationBar.landscape.backgroundImage = ""
# steroids.config.navigationBar.portrait.backgroundImage = ""

# -- Android Loading Screen
steroids.config.loadingScreen.tintColor = "#262626"

# -- iOS Status Bar --
steroids.config.statusBar.enabled = true
steroids.config.statusBar.style = "light"

# -- File Watcher --
# steroids.config.watch.exclude = ["www/my_excluded_file.js", "www/my_excluded_dir"]

# -- Pre- and Post-Make hooks --
# steroids.config.hooks.preMake.cmd = "echo"
# steroids.config.hooks.preMake.args = ["running yeoman"]
# steroids.config.hooks.postMake.cmd = "echo"
# steroids.config.hooks.postMake.args = ["cleaning up files"]

# -- Default Editor --
# steroids.config.editor.cmd = "subl"
# steroids.config.editor.args = ["."]
