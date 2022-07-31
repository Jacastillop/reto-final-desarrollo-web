package org.sofka.mykrello.model.domain;

import java.io.Serializable;
import java.time.Instant;

import javax.persistence.*;

import org.springframework.data.annotation.Transient;
import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.Data;

@Data
@Entity
@Table(name = "krl_log")
public class LogDomain implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "log_id", nullable = false, updatable = false)
    private Integer id;

    @Column(name = "tsk_id_task", nullable = false, updatable = false)
    private Integer idTask;

    @Column(name = "clm_id_previous", nullable = false, updatable = false)
    private Integer idColumnPrevious;

    @Column(name = "clm_id_current", nullable = false, updatable = false)
    private Integer idColumnCurrent;

    @Column(name = "log_created_at", nullable = false, updatable = false)
    private Instant createdAt = Instant.now();


    @ManyToOne(fetch = FetchType.LAZY, targetEntity = ColumnDomain.class, optional = false, cascade = CascadeType.ALL)
    @JoinColumn(name = "clm_id_previous", insertable = false, updatable = false)
    @JsonBackReference(value = "logPrevious")
    private ColumnDomain previous;

    @ManyToOne(fetch = FetchType.LAZY, targetEntity = ColumnDomain.class, optional = false, cascade = CascadeType.ALL)
    @JoinColumn(name = "clm_id_current", insertable = false, updatable = false)
    @JsonBackReference(value = "logCurrent")
    private ColumnDomain current;

    @ManyToOne(fetch = FetchType.LAZY, targetEntity = TaskDomain.class, optional = false, cascade = CascadeType.ALL)
    @JoinColumn(name = "tsk_id_task", insertable = false, updatable = false)
    @JsonBackReference(value = "log-task")
    @Transient
    private TaskDomain task;

    public LogDomain(Integer idTask, Integer idColumnPrevious, Integer idColumnCurrent) {
        this.idTask = idTask;
        this.idColumnPrevious = idColumnPrevious;
        this.idColumnCurrent = idColumnCurrent;
    }

    public LogDomain() {

    }
}
