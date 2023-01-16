package mall.domain;

import mall.domain.*;
import mall.infra.AbstractEvent;
import java.util.*;
import lombok.*;


@Data
@ToString
public class OrderCencelled extends AbstractEvent {

    private Long id;

    public OrderCencelled(Order aggregate){
        super(aggregate);
    }
    public OrderCencelled(){
        super();
    }
}
