import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose'
//define gesture description
export const one = new GestureDescription("one");

//index
one.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0) //fully confident that finger is straight 
one.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.50);

//thumb
one.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0)
one.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.50);
one.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.50);

//other fingers
for (let finger of [ Finger.Middle, Finger.Ring, Finger.Pinky]){
    one.addCurl(finger, FingerCurl.FullCurl, 1.0);
    one.addDirection(finger, FingerDirection.VerticalDown, 0.50);
}

