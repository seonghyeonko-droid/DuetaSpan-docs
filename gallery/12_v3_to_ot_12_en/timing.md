# v3_to_ot_12_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: I was just wondering, who actually played the guitar solo on
     7.26s  <ret> 발화 (turn1 첫 프레임)
     7.49s  agent 발화 시작: <ret> That’s a very astute observation about that iconic tra
     7.55s  user  발화 끝
     9.10s  ⚡SPAN 주입 [d'=1.84s / d_lead=3.32s]: Eddie Van Halen performed the guitar solo on Michael Jackson’s “Beat I
    12.12s  user  발화 시작: Right.
    12.61s  user  발화 끝
    17.83s  agent 발화 끝
    17.93s  user  발화 시작: Wow, really? Van Halen? I always assumed it was someone more
    24.43s  agent 발화 시작: Many assume it was a member of Jackson’s regular musicians, 
    24.51s  user  발화 끝
    26.44s  user  발화 시작: Mm-hmm.
    27.07s  user  발화 끝
    31.06s  agent 발화 끝
    31.10s  user  발화 시작: Hey, did you remember to take the chicken out of the freezer
    33.85s  user  발화 시작: Sorry about that. Back to “Beat It”, was he, uh, reluctant t
    34.01s  user  발화 끝
    38.33s  <ret> 발화 (turn8 첫 프레임)
    38.56s  agent 발화 시작: <ret> The story of his initial hesitation is quite fascinati
    38.66s  user  발화 끝
    39.53s  ⚡SPAN 주입 [d'=1.20s / d_lead=3.38s]: Eddie Van Halen initially refused to play on “Beat It” due to a contra
    45.02s  user  발화 시작: Yeah.
    45.52s  user  발화 끝
    49.84s  agent 발화 끝
    50.13s  user  발화 시작: A contract issue? That’s wild. So, what changed his mind?
    53.87s  <ret> 발화 (turn11 첫 프레임)
    54.26s  agent 발화 시작: <ret> It seems a challenge, and a sizable one, swayed him. M
    54.29s  user  발화 끝
    55.79s  ⚡SPAN 주입 [d'=1.92s / d_lead=3.49s]: Michael Jackson personally visited Van Halen and convinced him to part
    62.97s  agent 발화 끝
