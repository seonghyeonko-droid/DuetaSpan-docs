# v3_noinfo_23_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Show me the most recent log entry about a user clicking a bu
     2.80s  <ret> 발화 (turn1 첫 프레임)
     3.39s  agent 발화 시작: <ret> Certainly, let me check that for you. The last log ent
     3.51s  user  발화 끝
     3.80s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.87s]: (tool result) The most recent log entry shows a user clicked the “Subm
    14.06s  agent 발화 끝
    15.46s  user  발화 시작: Hmm, okay. And can you find all entries mentioning errors?
    18.99s  <ret> 발화 (turn3 첫 프레임)
    19.58s  agent 발화 시작: <ret> Of course, I can do that. Ten error logs were found fr
    19.81s  user  발화 끝
    19.99s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.41s]: (tool result) Ten log entries mention “error”: timestamps range from 1
    30.78s  user  발화 시작: That's… a lot of errors. Can you filter those to just the ne
    30.81s  agent 발화 끝
    34.80s  <ret> 발화 (turn5 첫 프레임)
    35.37s  user  발화 끝
    35.40s  agent 발화 시작: <ret> Absolutely, let's refine that search.
    35.80s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.91s]: (tool result) Five log entries report “Network failure” between 14:28:
    38.31s  agent 발화 끝
