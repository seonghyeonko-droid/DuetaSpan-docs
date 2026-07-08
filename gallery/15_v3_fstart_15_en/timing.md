# v3_fstart_15_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Could you make a text file named poem with a short verse?
     3.79s  <ret> 발화 (turn1 첫 프레임)
     4.19s  ⚡SPAN 주입 [d'=0.40s / d_lead=0.42s]: (tool result) A text file named poem was created with the content "The
     4.38s  agent 발화 시작: <ret> Certainly. I’ve created a file named “poem” containing
     4.40s  user  발화 끝
     9.89s  agent 발화 끝
    10.01s  user  발화 시작: Oh, that’s… actually, what’s the capital of France?
    13.29s  agent 발화 시작: Paris is the capital of France, a city renowned for its art 
    13.48s  user  발화 끝
    17.58s  user  발화 시작: Right.
    17.88s  <ret> 발화 (turn5 첫 프레임)
    17.96s  agent 발화 끝
    17.96s  ⚡SPAN 주입 [d'=0.08s / d_lead=1.43s]: <ret>
    18.22s  user  발화 끝
    18.33s  agent 발화 시작: <ret> Now, about that file— Were you hoping to add to the po
    24.28s  user  발화 시작: Uh, could you search for Italian restaurants near me?
    24.39s  agent 발화 끝
    27.66s  <ret> 발화 (turn7 첫 프레임)
    27.98s  ⚡SPAN 주입 [d'=0.32s / d_lead=0.76s]: (tool result) Four Italian restaurants are nearby: Bella Pasta, 0.5 mi
    28.03s  user  발화 끝
    28.26s  agent 발화 시작: <ret> Of course. I found four Italian restaurants within one
    31.41s  user  발화 시작: Yeah.
    31.86s  user  발화 끝
    34.32s  <ret> 발화 (turn9 첫 프레임)
    34.48s  ⚡SPAN 주입 [d'=0.16s / d_lead=1.46s]: <ret>
    34.70s  agent 발화 끝
    34.92s  agent 발화 시작: <ret> Would you like me to— Perhaps you’d like to see the ra
    40.48s  agent 발화 끝
    41.13s  user  발화 시작: What’s the phone number for Bella Pasta?
    42.74s  <ret> 발화 (turn11 첫 프레임)
    43.33s  agent 발화 시작: <ret> Just a moment. Bella Pasta’s phone number is 555-123-4
    43.46s  ⚡SPAN 주입 [d'=0.72s / d_lead=1.60s]: (tool result) Bella Pasta’s phone number is 555-123-4567, and it’s ope
    43.48s  user  발화 끝
    51.71s  user  발화 시작: Could you reserve a table there for two at 7:30?
    51.86s  agent 발화 끝
    54.80s  <ret> 발화 (turn13 첫 프레임)
    55.12s  ⚡SPAN 주입 [d'=0.32s / d_lead=0.40s]: (tool result) A table for two at Bella Pasta is reserved for today at 
    55.39s  agent 발화 시작: <ret> Certainly. I’ve reserved a table for two at Bella Past
    55.46s  user  발화 끝
    61.04s  agent 발화 끝
