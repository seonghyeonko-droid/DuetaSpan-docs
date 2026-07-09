# v3_abs_22_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 What mode of government does the a | S2 But what about monarchy specifical | S3 So, if someone wanted to avoid ups | S4 That sounds… chaotic, honestly.

     0.00s  user  발화 시작: What mode of government does the anarchists hate?
     2.38s  <ret> 발화 (turn1 첫 프레임)
     2.53s  agent 발화 시작: <ret> That’s a really interesting question, and I can certai
     2.68s  user  발화 끝
     4.14s  ⚡SPAN 주입 [d'=1.76s / d_lead=3.75s]: (no information found)
     6.10s  agent 발화 시작: I’ve searched extensively, but unfortunately, there isn’t a 
     6.28s  agent 발화 끝
     9.60s  user  발화 시작: Uh-huh.
    10.04s  user  발화 끝
    12.08s  agent 발화 끝
    12.09s  user  발화 시작: That’s odd. Wouldn't they hate all governments?
    14.75s  agent 발화 시작: [happy] It's a fair point, you're right to wonder about that
    15.00s  user  발화 끝
    16.59s  user  발화 시작: But what about monarchy specifically? Do they have strong fe
    17.33s  agent 발화 끝
    20.41s  <ret> 발화 (turn7 첫 프레임)
    20.73s  agent 발화 시작: <ret> You’re bringing up a very specific area, and that’s he
    20.80s  user  발화 끝
    21.53s  ⚡SPAN 주입 [d'=1.12s / d_lead=3.05s]: Anarchists oppose all forms of hierarchical rule, including monarchy, 
    23.72s  agent 발화 시작: Anarchists do indeed oppose monarchy, seeing all hierarchica
    23.78s  agent 발화 끝
    28.96s  user  발화 시작: Okay, so it’s not just governments in general, but the power
    29.13s  agent 발화 끝
    33.03s  agent 발화 시작: Precisely! It’s the very idea of imposed authority that anar
    33.17s  user  발화 끝
    40.16s  agent 발화 끝
    40.27s  user  발화 시작: So, if someone wanted to avoid upsetting anarchists, what ki
    46.19s  agent 발화 시작: That’s a thoughtful question. Anarchists generally favor vol
    46.52s  user  발화 끝
    52.86s  agent 발화 끝
    52.87s  user  발화 시작: Like, little communities making their own rules?
    55.92s  agent 발화 시작: Exactly. Self-governance and mutual aid are core principles 
    56.06s  user  발화 끝
    61.12s  user  발화 시작: That sounds… chaotic, honestly.
    61.20s  agent 발화 끝
    63.75s  user  발화 끝
    64.16s  agent 발화 시작: It can appear that way at first glance, but many believe it'
    69.53s  agent 발화 끝
