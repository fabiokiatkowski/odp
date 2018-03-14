FROM tomcat
MAINTAINER Fabio Kiatkowski <xolla@xolla.com.br>
COPY /dist/ /usr/local/tomcat/webapps/odp
RUN chmod 775 -R /usr/local/tomcat/webapps