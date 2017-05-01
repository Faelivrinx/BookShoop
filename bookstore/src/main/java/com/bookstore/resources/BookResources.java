package com.bookstore.resources;

import com.bookstore.domain.Book;
import com.bookstore.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by Dominik on 01.05.2017.
 */
@RestController
@RequestMapping("/book")
public class BookResources {

    @Autowired
    private BookService bookService;

    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public Book addBookPost(@RequestBody Book book){
        return bookService.save(book);
    }
}
