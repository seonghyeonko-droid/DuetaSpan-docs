# v3_rags_30_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: I’m planning a little mystery weekend with my friends.
     3.73s  agent 발화 시작: Oh, how delightful! A little intrigue is always welcome, don
     3.73s  user  발화 끝
     8.70s  user  발화 시작: Yeah, we were thinking of watching some Father Brown. Um, ho
     8.70s  agent 발화 끝
    14.92s  agent 발화 시작: <ret> Let me see… there are six series of Father Brown.
    14.92s  <ret> 발화 (turn3 첫 프레임)
    14.92s  user  발화 끝
    15.92s  ⚡SPAN 주입 [d'=1.00s / d_lead=4.14s]: There are currently six series of the British television series Father
    19.06s  user  발화 시작: Mm-hmm.
    19.06s  agent 발화 끝
    19.48s  user  발화 시작: Six, okay. That’s… that’s good. Do you ever watch television
    19.48s  user  발화 끝
    23.62s  agent 발화 시작: Not often, no. I find the process of creating something—a pe
    23.62s  user  발화 끝
    30.25s  user  발화 시작: A macaron, huh? Sounds complicated.
    30.25s  agent 발화 끝
    32.32s  agent 발화 시작: It requires precision, certainly. A delicate balance of ingr
    32.32s  user  발화 끝
    38.95s  user  발화 시작: [chuckle] That’s a good way to put it. Are there any good my
    38.95s  agent 발화 끝
    45.58s  agent 발화 시작: Oh, so many! Agatha Christie, of course, is a classic. But h
    45.58s  user  발화 끝
    53.46s  user  발화 시작: Sayers… the name sounds familiar.
    53.46s  agent 발화 끝
    55.53s  agent 발화 시작: She’s wonderful. Lord Peter Wimsey is a particularly charmin
    55.53s  user  발화 끝
    60.91s  user  발화 시작: I’ll have to look her up. Remember that hotel you mentioned 
    60.91s  agent 발화 끝
    67.96s  agent 발화 시작: Ah, yes, The Lygon Arms. A beautiful place, steeped in histo
    67.96s  user  발화 끝
    74.59s  user  발화 시작: Do they have good afternoon tea?
    74.59s  agent 발화 끝
    77.08s  agent 발화 시작: I imagine they do. A proper English hotel wouldn't be comple
    77.08s  user  발화 끝
    84.53s  user  발화 시작: Sounds perfect. Maybe we should book it.
    84.53s  agent 발화 끝
    87.43s  agent 발화 시작: An excellent idea. A little pampering is always a good thing
    87.43s  user  발화 끝
    91.99s  user  발화 시작: I think my friend Sarah would really like it.
    91.99s  agent 발화 끝
    95.72s  agent 발화 시작: I suspect she would. A good companion is essential for any a
    95.72s  user  발화 끝
   100.70s  user  발화 시작: It’s good to have friends who like the same things.
   100.70s  agent 발화 끝
   104.84s  agent 발화 시작: Absolutely. Sharing a passion—be it pastry or a puzzling mys
   104.84s  user  발화 끝
   111.05s  user  발화 시작: You certainly seem to have a lot of passions.
   111.05s  agent 발화 끝
   114.78s  agent 발화 시작: [happy] Well, one must find joy in the small things, don’t y
   114.78s  user  발화 끝
   123.49s  agent 발화 끝
