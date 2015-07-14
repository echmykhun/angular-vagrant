#
# Cookbook Name:: che-node
# Recipe:: default
#
# Copyright 2015, YOUR_COMPANY_NAME
#
# All rights reserved - Do Not Redistribute
#
execute 'curl -sL https://deb.nodesource.com/setup_iojs_2.x | sudo bash -' do
  command 'curl -sL https://deb.nodesource.com/setup_iojs_2.x | sudo bash -'
end
execute "apt-get update" do
  command "apt-get update"
end
package 'iojs' do
  action :install
end
execute 'npm install gulp -g' do
  command 'npm install gulp -g'
end
execute "npm-install" do
  cwd "/vagrant"
  command "npm install --no-bin-links"
  user "vagrant"
  action :run
end