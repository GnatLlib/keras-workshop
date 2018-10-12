import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import TextField from "@material-ui/core/TextField";

export const LayerCard = props => {
    const {
        class_name,
        config: { activation, activity_regularizer, dtype, name, units }
    } = props;

    return (
        <Card>
            <CardHeader>
                <TextField
                    id="layer-name"
                    label="Name"
                    value={name}
                    onChange={e => {
                        console.log(e);
                    }}
                    variant="outlined"
                />
            </CardHeader>
            <CardContent>
                <div> {activation} </div>
                <div> {activity_regularizer} </div>
                <div> {dtype} </div>
                <div> {units} </div>
            </CardContent>
        </Card>
    );
};
