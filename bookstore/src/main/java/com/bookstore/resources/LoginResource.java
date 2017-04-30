package com.bookstore.resources;

import com.bookstore.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.Collections;
import java.util.Map;

/**
 * Created by Dominik on 29.04.2017.
 */

@RestController
public class LoginResource {

    @Autowired
    private UserService userService;

    @RequestMapping("/token")
    public Map<String, String> token(HttpSession session, HttpServletRequest request){
        System.out.println(request.getRemoteHost());

        String remoteHost = request.getRemoteHost();
        int portNumber = request.getRemotePort();

        System.out.println(remoteHost + ":" + portNumber);
        System.out.println(request.getRemoteAddr());


        return Collections.singletonMap("token", session.getId());
    }

    @RequestMapping("/checkSession")
    public ResponseEntity checksession(){
        return new ResponseEntity("Session Active!", HttpStatus.OK);
    }

}
