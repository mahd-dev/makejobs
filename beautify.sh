for f in $1; do
    tidy5 -im --indent auto --indent-spaces 4 -utf8 -wrap 1000 $f
done

