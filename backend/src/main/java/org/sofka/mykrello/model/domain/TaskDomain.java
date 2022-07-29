package org.sofka.mykrello.model.domain;

import java.io.Serializable;
import java.time.Instant;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "krl_task")
public class TaskDomain implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "tsk_id", nullable = false)
    private Integer id;

    @Column(name = "clm_id_column", nullable = false)
    private Integer idColumn;

    @Column(name = "brd_id_board", nullable = false)
    private Integer idBoard;

    @Column(name = "tsk_name", nullable = false, length = 100)
    private String name;

    @Column(name = "tsk_description", length = 500)
    private String description;

    @Column(name = "tsk_delivery_date", nullable = false)
    private Instant deliveryDate;

    @Column(name = "tsk_created_at", nullable = false,updatable = false)
    private Instant createdAt;

    @Column(name = "tsk_updated_at")
    private Instant updatedAt;

}
