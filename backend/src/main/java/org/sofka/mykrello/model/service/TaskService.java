package org.sofka.mykrello.model.service;

import java.util.List;

import org.sofka.mykrello.model.domain.BoardDomain;
import org.sofka.mykrello.model.domain.TaskDomain;
import org.sofka.mykrello.model.repository.BoardRepository;
import org.sofka.mykrello.model.repository.TaskRepository;
import org.sofka.mykrello.model.service.interfaces.TaskServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class TaskService implements TaskServiceInterface {

    @Autowired
    private LogService logService;

    @Autowired
    private TaskRepository taskRepository;


    @Override
    public List<TaskDomain> findAllTasksById(Integer idBoard) {
        return taskRepository.findAllByIdBoard(idBoard);
    }

    @Override
    @Transactional(readOnly = true)
    public TaskDomain findById(Integer id) {
        var task = taskRepository.findById(id);
        return task.isPresent() ? task.get() : null;
    }

    @Override
    @Transactional
    public TaskDomain create(TaskDomain task) {
        var newTask = taskRepository.save(task);
        return newTask;
    }

    @Override
    @Transactional
    public TaskDomain update(Integer id, TaskDomain task) {
        task.setId(id);
        return taskRepository.save(task);
    }

    @Override
    public TaskDomain delete(Integer id) {
        var optionalTask = taskRepository.findById(id);
        taskRepository.delete(optionalTask.get());
        return optionalTask.get();
    }
}
