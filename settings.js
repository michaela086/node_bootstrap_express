var server_settings = {
	mysql_host: 'localhost',
	mysql_user: 'root',
	mysql_pass: '',
	mysql_db: 'db_insurance'    
};

var MySQL_connection = mysql.createConnection({
  host     : server_settings.mysql_host,
  user     : server_settings.mysql_user,
  password : server_settings.mysql_pass,
  database : server_settings.mysql_db,
  insecureAuth: true
});