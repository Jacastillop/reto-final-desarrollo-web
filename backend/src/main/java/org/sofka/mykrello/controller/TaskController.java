package org.sofka.mykrello.controller;

import org.sofka.mykrello.model.domain.TaskDomain;
import org.sofka.mykrello.model.service.LogService;
import org.sofka.mykrello.model.service.TaskService;
import org.sofka.mykrello.utilities.MyResponseUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(value = "*")
@RestController
public class TaskController {

    @Autowired
    private MyResponseUtility response;

    @Autowired
    private TaskService taskService;

    @Autowired
    private LogService logService;

    @GetMapping(path = "/api/vi/task/task-board/{idBoard}")
    public ResponseEntity<MyResponseUtility> getAllTasksByBoard(@PathVariable(value="idBoard") Integer idBoard){
        response.data = taskService.findAllTasksById(idBoard);
        return new ResponseEntity<>(response,HttpStatus.OK);
    }

    @GetMapping(path = "/api/v1/task/{id}")
    public ResponseEntity<MyResponseUtility> getTasksById(@PathVariable(value = "id") Integer id) {
        response.data = taskService.findById(id);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping(path = "/api/v1/task")
    public ResponseEntity<MyResponseUtility> create(@RequestBody TaskDomain task){
        response.data = taskService.create(task);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @PutMapping(path = "/api/v1/task/{id}")
    public  ResponseEntity<MyResponseUtility> update(@PathVariable(value = "id") Integer id, @RequestBody TaskDomain task){
        response.data = taskService.update(id, task);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @DeleteMapping(path = "api/v1/task/{id}")
    public  ResponseEntity<MyResponseUtility> delete(@PathVariable(value = "id") Integer id){
        response.data = taskService.delete(id);
        return new ResponseEntity<>(response,HttpStatus.OK);
    }


    @PutMapping(path = "api/v1/task/move-to-column/{id}")
    public ResponseEntity<MyResponseUtility> moveToColumn(@PathVariable(value = "id") Integer id, @RequestBody TaskDomain task){
        response.data = taskService.moveToColumn(id,task);
        return new ResponseEntity<>(response,HttpStatus.OK);
    }

}
