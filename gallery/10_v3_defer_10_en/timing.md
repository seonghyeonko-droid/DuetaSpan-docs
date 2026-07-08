# v3_defer_10_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Overwrite the backup dot txt file with the database backup m
     6.20s  <ret> 발화 (turn1 첫 프레임)
     6.27s  agent 발화 시작: <ret> Certainly, I can handle that for you. The file has bee
     6.30s  user  발화 끝
     7.40s  ⚡SPAN 주입 [d'=1.20s / d_lead=2.82s]: (tool result) The file backup.txt was overwritten with the provided te
    11.92s  user  발화 시작: Right. And can you find me the nearest cathedral currently u
    11.92s  agent 발화 끝
    16.37s  <ret> 발화 (turn3 첫 프레임)
    16.64s  user  발화 끝
    16.69s  agent 발화 시작: <ret> That's a fascinating question, actually. St. Albans Ca
    17.33s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.73s]: (tool result) St. Albans Cathedral is two point seven miles away, with
    26.04s  user  발화 시작: But… I— I mean, what kind of stone are they using for that r
    26.52s  agent 발화 끝
    29.59s  agent 발화 시작: That’s a good detail to consider, especially with historic b
    29.73s  user  발화 끝
    41.83s  agent 발화 끝
