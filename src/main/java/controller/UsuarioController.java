package controller;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;

//Aqui vai encontrar o nome para a requisi��o, ele recebe o padr�o de URL
@WebServlet(urlPatterns= {"usucontroller","usuariocontroller"})
public class UsuarioController extends HttpServlet{
}
