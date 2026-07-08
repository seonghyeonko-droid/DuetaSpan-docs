# v3_rag_23_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Hello there!
     0.82s  agent 발화 시작: Well hello to you too. Lovely to be chatting. What’s on your
     0.82s  user  발화 끝
     6.54s  user  발화 시작: I was wondering… do you know anything about Max Ehrmann?
     6.54s  agent 발화 끝
    10.62s  agent 발화 시작: <ret> Max Ehrmann, yes—a fine writer. He was born in Septemb
    10.62s  <ret> 발화 (turn3 첫 프레임)
    10.62s  user  발화 끝
    11.62s  ⚡SPAN 주입 [d'=1.00s / d_lead=5.31s]: Max Ehrmann was born on September 3, 1872, in Terre Haute, Indiana.
    15.93s  user  발화 시작: September third, huh? Um, I think I’ve heard that name befor
    15.93s  agent 발화 끝
    22.06s  agent 발화 시작: He wrote a lot of poetry, and essays mostly. A quiet sort of
    22.06s  user  발화 끝
    29.41s  user  발화 시작: Do you know if any of his poems got really popular, like, us
    29.41s  agent 발화 끝
    36.76s  agent 발화 시작: <ret> Actually, yes. His poem “Desiderata” became quite well
    36.76s  <ret> 발화 (turn7 첫 프레임)
    36.76s  user  발화 끝
    37.76s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.68s]: "Desiderata" is a 1927 poem by Max Ehrmann, widely recited and used in
    40.44s  user  발화 시작: Devotional recordings? That’s interesting. I didn’t realize 
    40.44s  agent 발화 끝
    45.34s  agent 발화 시작: Oh, it does. [chuckle] Reminds me of a long flight to Rome—a
    45.34s  user  발화 끝
    53.10s  user  발화 시작: That’s a funny story! So, “Desiderata”—is that Italian for s
    53.10s  agent 발화 끝
    57.19s  agent 발화 시작: It’s Latin, actually. Means “things desired.” A beautiful se
    57.19s  user  발화 끝
    61.68s  user  발화 시작: It is. Was it popular right away, or did it take a while to 
    61.68s  agent 발화 끝
    68.21s  agent 발화 시작: <ret> It took a little while. It really gained traction in t
    68.21s  <ret> 발화 (turn13 첫 프레임)
    68.21s  user  발화 끝
    69.21s  ⚡SPAN 주입 [d'=1.00s / d_lead=5.72s]: "Desiderata" gained widespread popularity in the 1970s, often mistaken
    73.93s  user  발화 시작: The seventies? That’s a long time after he wrote it. That’s 
    73.93s  agent 발화 끝
    78.84s  agent 발화 시작: Well, good things often take time to be appreciated, wouldn'
    78.84s  user  발화 끝
    85.78s  user  발화 시작: I guess so. Remember that hotel you mentioned earlier? Did y
    85.78s  agent 발화 끝
    91.50s  agent 발화 시작: Oh, the Grand Budapest? Yes, a few times. A rather… eccentri
    91.50s  user  발화 끝
    98.03s  user  발화 시작: Eccentric how?
    98.03s  agent 발화 끝
    98.85s  agent 발화 시작: [sigh] The concierge insisted on addressing everyone by thei
    98.85s  user  발화 끝
   105.39s  user  발화 시작: That’s… something. So, you flew a lot internationally then?
   105.39s  agent 발화 끝
   109.06s  agent 발화 시작: I did. All over the world, really. From Buenos Aires to Bang
   109.06s  user  발화 끝
   115.60s  user  발화 시작: Wow. That sounds amazing. Did you have a favorite place to f
   115.60s  agent 발화 끝
   120.91s  agent 발화 시작: That’s a tough one. Perhaps Sydney. The approach over the ha
   120.91s  user  발화 끝
   126.63s  user  발화 시작: I’ve seen pictures of that harbor. It looks gorgeous.
   126.63s  agent 발화 끝
   130.30s  agent 발화 시작: Gorgeous doesn't begin to describe it. You feel like you cou
   130.30s  user  발화 끝
   137.65s  user  발화 시작: Sounds incredible. I might have to visit someday.
   137.65s  agent 발화 끝
   140.92s  agent 발화 시작: You absolutely should. It’s a long haul, but worth every min
   140.92s  user  발화 끝
   145.42s  agent 발화 끝
