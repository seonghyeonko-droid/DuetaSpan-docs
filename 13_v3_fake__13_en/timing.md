# v3_fake__13_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 I was wondering, when is Demi Lova | S2 Oh, okay. So it’s already out? I t | S3 I'm hoping to see her live if she  | S4 That was a while ago, though. Is t

     0.00s  user  발화 시작: I was wondering, when is Demi Lovato’s new album coming out?
     6.44s  agent 발화 시작: That’s a wonderful question—music is such a beautiful form o
     6.58s  user  발화 끝
    11.16s  agent 발화 끝
    12.69s  user  발화 시작: Yeah, I really like her music.
    14.67s  <ret> 발화 (turn3 첫 프레임)
    14.91s  agent 발화 시작: <ret> Let’s see what I can find for you— Her album, *Confide
    15.09s  user  발화 끝
    16.35s  ⚡SPAN 주입 [d'=1.68s / d_lead=2.94s]: Demi Lovato's fifth studio album, *Confident*, was released in October
    21.22s  user  발화 시작: Oh, okay. So it’s already out? I thought it was still upcomi
    21.53s  agent 발화 끝
    24.98s  <ret> 발화 (turn5 첫 프레임)
    25.30s  agent 발화 시작: <ret> It appears so—sometimes information can be a little co
    25.34s  user  발화 끝
    25.54s  ⚡SPAN 주입(IRRELEVANT) [d'=0.56s / d_lead=5.65s]: The platypus is a semi-aquatic mammal endemic to eastern Australia, in
    29.02s  user  발화 시작: Uh-huh.
    29.52s  user  발화 끝
    30.89s  user  발화 시작: But is she doing a tour with it?
    30.95s  agent 발화 끝
    33.20s  user  발화 끝
    33.25s  agent 발화 시작: Oh—that’s a very good point to ask!
    35.42s  user  발화 시작: I'm hoping to see her live if she is.
    35.52s  agent 발화 끝
    37.78s  agent 발화 시작: Many artists do tours to support new albums—it’s a fantastic
    37.82s  user  발화 끝
    44.13s  agent 발화 끝
    44.66s  user  발화 시작: Mm-hmm.
    44.89s  <ret> 발화 (turn12 첫 프레임)
    45.13s  agent 발화 시작: <ret> I can certainly look into tour dates for you— She tour
    45.15s  user  발화 끝
    46.89s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.15s]: Demi Lovato embarked on the Future Now Tour in 2016, alongside Nick Jo
    49.13s  user  발화 시작: Mm-hmm.
    49.62s  user  발화 끝
    52.82s  agent 발화 끝
    52.91s  user  발화 시작: That was a while ago, though. Is there anything more recent?
    56.75s  user  발화 끝
    56.83s  agent 발화 시작: You are right to ask—let’s find out about more recent concer
    61.98s  <ret> 발화 (turn16 첫 프레임)
    62.38s  agent 발화 시작: <ret> Let me just check for any updated information— Her las
    62.57s  agent 발화 끝
    62.94s  ⚡SPAN 주입 [d'=0.96s / d_lead=3.03s]: Demi Lovato’s most recent tour concluded in 2018 with the Tell Me You 
    66.53s  user  발화 시작: Mm-hmm.
    67.03s  user  발화 끝
    71.09s  agent 발화 끝
    71.39s  user  발화 시작: Okay, so nothing currently planned then? That’s a shame.
    75.19s  agent 발화 시작: It seems that way, though artists often announce new tours u
    75.22s  user  발화 끝
    83.67s  agent 발화 끝
