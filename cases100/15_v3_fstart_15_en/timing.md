# v3_fstart_15_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 Hey Sion, things are… rough after  | S2 That's… good to know. I should pro | S3 I don't know, maybe painting? Or p | S4 I’m also trying to avoid checking 

     0.00s  user  발화 시작: Hey Sion, things are… rough after the breakup. I'm feeling r
     2.36s  agent 발화 시작: Okay.
     3.00s  agent 발화 끝
     5.14s  agent 발화 시작: It's completely normal to feel lost right now. Breakups shak
     5.23s  user  발화 끝
     8.96s  user  발화 시작: Uh-huh.
     9.55s  user  발화 끝
    11.39s  agent 발화 끝
    12.34s  user  발화 시작: I keep thinking about all the plans we made.
    14.80s  agent 발화 시작: Those shared dreams can be really hard to let go of. It's ok
    14.87s  user  발화 끝
    18.98s  user  발화 시작: Uh-huh.
    19.76s  user  발화 끝
    20.39s  agent 발화 끝
    22.59s  user  발화 시작: Could you check flights to San— actually, never mind. What's
    26.66s  <ret> 발화 (turn8 첫 프레임)
    27.90s  ⚡SPAN 주입 [d'=1.24s / d_lead=4.24s]: Today in Seattle, the weather is 72 degrees Fahrenheit and partly clou
    27.96s  agent 발화 시작: <ret> Today in Seattle, it's seventy-two degrees Fahrenheit 
    28.08s  user  발화 끝
    32.20s  agent 발화 끝
    33.46s  user  발화 시작: That's… good to know. I should probably get out of the house
    35.88s  agent 발화 시작: Yeah.
    36.49s  agent 발화 끝
    38.12s  agent 발화 시작: Fresh air can do wonders for your mood. A small step, but a 
    38.14s  user  발화 끝
    42.79s  agent 발화 끝
    42.81s  user  발화 시작: I was thinking of maybe trying a new hobby. Something comple
    46.86s  user  발화 끝
    46.91s  agent 발화 시작: That’s a fantastic idea! Exploring new interests can be real
    51.66s  user  발화 시작: Right.
    52.29s  user  발화 끝
    53.62s  agent 발화 끝
    53.69s  user  발화 시작: I don't know, maybe painting? Or pottery?
    55.86s  <ret> 발화 (turn16 첫 프레임)
    56.46s  user  발화 끝
    56.52s  agent 발화 시작: <ret> There’s Seattle Pottery Studio at 123 Main Street, a $
    56.88s  ⚡SPAN 주입 [d'=1.03s / d_lead=6.81s]: (tool result) Seattle Pottery Studio, 123 Main Street, Seattle, WA 981
    59.16s  user  발화 시작: Yeah.
    59.75s  user  발화 끝
    63.33s  agent 발화 끝
    63.52s  user  발화 시작: That sounds… manageable. Maybe I'll check it out.
    65.92s  agent 발화 시작: Yeah.
    66.51s  agent 발화 끝
    67.38s  agent 발화 시작: It’s a good first step. Sometimes just trying something new 
    67.41s  user  발화 끝
    70.11s  user  발화 시작: Uh-huh.
    70.64s  user  발화 끝
    71.94s  agent 발화 끝
    72.68s  user  발화 시작: I’m also trying to avoid checking his social media. It’s so 
    76.47s  user  발화 끝
    76.54s  agent 발화 시작: [sigh] That’s a really common struggle. It's understandable 
    86.27s  agent 발화 끝
    86.90s  user  발화 시작: That would be great, actually. It's like an obsession.
    90.04s  agent 발화 시작: It's not a failing on your part; it's a natural reaction to 
    90.09s  user  발화 끝
    97.70s  agent 발화 끝
