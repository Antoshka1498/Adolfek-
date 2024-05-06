// JavaScript Document
import
javafx.animation.AnimationTimer;
import javafx.application.Application;
import javafx.scene.Group;
import javafx.scene.Scene;
import javafx.scene.image.Image;
import javafx.scene.image.ImageView;
import javafx.stage.Stage;
public class ImageAnimation extends
	Application{
		private Image imgage;
		private ImageView imageView;
		private double x=0;
private double y=0;
@Override
public void start(Stage stage) {
	//Load the image
	image=new
	image=("tokio.jpg")
	//create the image view
	imageView=new
	ImageView(image);
	imgeView.setX(x);
	imageView.setY(y);
	Group root=new Group();
	root.getChildren().add(imageView);
	Scene scene=new Scene(root, 600, 400);
	stage.setScene(scene);
	stage.setTitle("ImageAnimation");
	stage.show();
	AnimationTimer timer=new AnimationTimer(){
		@Override
		public void handle(long now){
			x+=1;
			y+=1;
			imageView.setX(x);
			imageView.setY(y);
		}
	};
timer.start();
}
public static void main(String[]args){
	launch(args);
}
}