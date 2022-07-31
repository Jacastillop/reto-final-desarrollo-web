package org.sofka.mykrello.model.service.interfaces;

import java.util.List;

import org.sofka.mykrello.model.domain.LogDomain;

public interface LogServiceInterface {
    public List<LogDomain> findByTaskId(Integer id);
    public LogDomain create(LogDomain log);
    public void deleteByTaskId(Integer taskId);
}
