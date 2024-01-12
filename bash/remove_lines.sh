#!/bin/bash

# Запрашиваем имя файла
echo "Введите имя файла:"
read filename

# Проверяем, существует ли файл
if [ ! -f "$filename" ]; then
    echo "Файл не найден"
    exit 1
fi

# Создаем временный файл для записи отфильтрованных строк
tempfile=$(mktemp)
while read -r line; do
    # Проверяем, начинается ли строка с 'element: <'
    if [[ "$line" == element:\ \<* ]]; then
        continue # Пропускаем эту строку
    fi
    echo "$line" >> "$tempfile" # Записываем строку во временный файл
done < "$filename"

# Перезаписываем исходный файл отфильтрованными строками
mv "$tempfile" "$filename"