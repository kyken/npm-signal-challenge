#!/bin/sh

# npmタスクにSIGTERMを伝播させる
trap 'kill $(jobs -p); wait; exit' SIGTERM

npm run start &
pids+=($!)

npm run start &
pids+=($!)

# Dockerからのシグナルを受信するため当スクリプトで待ち合わせる

echo ${pids[@]}
wait
