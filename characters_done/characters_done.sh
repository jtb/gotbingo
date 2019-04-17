for f in ../characters/*.png ../characters/*.jpg ../characters/*.jpeg; do

  filename=$(basename -- "$f")
  #extension="${filename##*.}"
  #filename="${filename%.*}"
  #echo $filename"_done"
  #echo "$extension"
  #echo $filename
  convert -fill red -colorize 40% "$f" "$filename"
done
