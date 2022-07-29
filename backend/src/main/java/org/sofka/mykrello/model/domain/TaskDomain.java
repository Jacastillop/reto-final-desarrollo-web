package org.sofka.mykrello.model.domain;

import java.io.Serializable;
import java.time.Instant;

import javax.persistence.*;

import lombok.Data;

@Data
@Entity
@Table(name = "krl_task")
public class TaskDomain implements Serializable {

    private static final long serialVersionUID = 1L;

    @PreUpdate
    public void preUpdate() {
        if (this.updatedAt == null)
            this.updatedAt = Instant.now();
    }

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

    @Column(name = "tsk_delivery_date")
    private Instant deliveryDate;

    @Column(name = "tsk_created_at", nullable = false,updatable = false)
    private Instant createdAt = Instant.now();

    @Column(name = "tsk_updated_at")
    private Instant updatedAt;

}
