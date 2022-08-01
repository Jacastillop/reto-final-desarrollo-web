package org.sofka.mykrello.model.service;

import java.util.List;

import org.sofka.mykrello.model.domain.LogDomain;
import org.sofka.mykrello.model.repository.LogRepository;
import org.sofka.mykrello.model.service.interfaces.LogServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class LogService implements LogServiceInterface {

    @Autowired
    LogRepository logRepository;

    @Override
    @Transactional(readOnly = true)
    public List<LogDomain> findByTaskId(Integer taskId) {
        return logRepository.findLogDomainById(taskId);
    }

    @Override
    @Transactional
    public LogDomain create(LogDomain log) {
        return logRepository.save(log);
    }

    @Override
    @Transactional
    public void deleteByTaskId(Integer taskId) {
        logRepository.deleteAllByTask_Id(taskId);
    }




}
