#Concerto 2 Digital Signage System

##Automated Installation:
Linux/Mac: curl get.concerto-signage.org | ruby

Windows: Download http://get.concerto-signage.org/install.rb and run it

OR

##Manual Installation:
NB: Upon startup, Concerto will create and configure a SQLite database. If you wish to alter this, edit config/database.yml appropriately. 
Upon its next startup, Concerto will populate whatever database you've specified.

1. git clone https://github.com/concerto/concerto.git
2. cd concerto
3. bundle install or bundle install --path vendor/bundle if you don't wish to install all of the Gem dependencies of Concerto/Rails globally (there are just over 115 of them).
4. Set up the appropriate webserver configuration (VHosts and such) and start using Concerto
5. Go the the Concerto URL to setup the initial admin user.

Concerto 2 is licensed under the Apache License, Version 2.0.
