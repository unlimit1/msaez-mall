package mall.domain;

import mall.domain.*;
import mall.infra.AbstractEvent;
import java.util.*;
import lombok.*;


@Data
@ToString
public class DeliveryCencelled extends AbstractEvent {

    private Long id;
    private Long orderId;
    private String pruductName;
    private Integer qty;
    private String status;

    public DeliveryCencelled(Delivery aggregate){
        super(aggregate);
    }
    public DeliveryCencelled(){
        super();
    }
}
