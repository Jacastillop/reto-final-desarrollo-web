package org.sofka.mykrello.model.service;

import java.time.Instant;
import java.util.List;

import org.sofka.mykrello.model.domain.LogDomain;
import org.sofka.mykrello.model.domain.TaskDomain;
import org.sofka.mykrello.model.repository.ColumnRepository;
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

    @Autowired
    private ColumnRepository columnRepository;


    @Override
    public List<TaskDomain> findAllTasksById(Integer idBoard) {
        return taskRepository.findAllByIdBoard(idBoard);
    }

    @Override
    @Transactional(readOnly = true)
    public TaskDomain findById(Integer id) {
        var task = taskRepository.findById(id);
        return task.orElse(null);
    }

    @Override
    @Transactional
    public TaskDomain create(TaskDomain task) {
        return taskRepository.save(task);
    }

    @Override
    @Transactional
    public TaskDomain update(Integer id, TaskDomain newTask) {
        String name = newTask.getName();
        String description = newTask.getDescription();
        Instant deliveryDate = newTask.getDeliveryDate();

        var actualTask = taskRepository.findById(id);

        if (actualTask.isEmpty()) return null;

        if(name != null)  actualTask.get().setName(name);
        if(description != null) actualTask.get().setDescription(description);
        if(deliveryDate != null) actualTask.get().setDeliveryDate(deliveryDate);

        return taskRepository.save(actualTask.get());
    }

    @Override
    public TaskDomain delete(Integer id) {
        var task = taskRepository.findById(id).orElse(null);
        logService.deleteByTaskId(task.getId());
        taskRepository.deleteById(task.getId());
        return task;
    }

    @Override
    public TaskDomain moveToColumn(Integer id, TaskDomain task) {
        var actualTask = taskRepository.findById(id).orElse(null);

        Integer currentIdColumn = task.getIdColumn();
        Integer previousIdColumn = actualTask.getIdColumn();

        //var currentColumn = columnRepository.findById(currentIdColumn).orElse(null);
        //var previousColumn = columnRepository.findById(previousIdColumn).orElse(null);

        actualTask.setIdColumn(currentIdColumn);

        LogDomain myLog = new LogDomain(id,previousIdColumn,currentIdColumn);
        logService.create(myLog);

        return taskRepository.save(actualTask);
    }


}
