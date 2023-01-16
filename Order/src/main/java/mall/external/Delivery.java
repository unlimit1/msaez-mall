package mall.external;

import lombok.Data;
import java.util.Date;
@Data
public class Delivery {

    private Long id;
    private Long orderId;
    private String pruductName;
    private Integer qty;
    private String status;
}


