# v3_rag_24_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: I was reading a book and came across the name du Plessis. It
     7.23s  <ret> 발화 (turn1 첫 프레임)
     7.31s  agent 발화 시작: <ret> That’s a very astute observation about the sound of th
     7.41s  user  발화 끝
     8.19s  ⚡SPAN 주입 [d'=0.96s / d_lead=3.23s]: The surname du Plessis is of French origin, meaning “of the castle.”
    10.54s  agent 발화 끝
    10.66s  agent 발화 시작: The name du Plessis originates from France and literally tra
    15.94s  agent 발화 끝
    16.07s  user  발화 시작: A castle, huh. So it's an aristocratic name, then? Was it co
    22.78s  <ret> 발화 (turn4 첫 프레임)
    22.98s  user  발화 끝
    23.02s  agent 발화 시작: <ret> It certainly suggests a connection to land ownership a
    24.78s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.57s]: The name du Plessis became prominent among French nobility during the 
    26.52s  agent 발화 시작: The name du Plessis was prominent among French nobility thro
    26.59s  agent 발화 끝
    31.25s  agent 발화 끝
    32.11s  user  발화 시작: Interesting. But I've also seen it used in South Africa. Is 
    36.54s  <ret> 발화 (turn7 첫 프레임)
    36.70s  agent 발화 시작: <ret> Indeed, there’s a fascinating link to South Africa, st
    36.88s  user  발화 끝
    38.54s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.81s]: French Huguenots, fleeing religious persecution, settled in South Afri
    41.36s  agent 발화 시작: French Huguenots brought the name du Plessis to South Africa
    41.51s  agent 발화 끝
    48.12s  agent 발화 끝
    48.38s  user  발화 시작: Huguenots… right, the Protestants. What impact did they have
    53.68s  <ret> 발화 (turn10 첫 프레임)
    53.84s  user  발화 끝
    53.92s  agent 발화 시작: <ret> They were instrumental in establishing the foundations
    55.28s  ⚡SPAN 주입 [d'=1.60s / d_lead=4.12s]: Huguenots contributed significantly to South African agriculture, viti
    57.88s  agent 발화 시작: Huguenots significantly contributed to South African agricul
    58.04s  agent 발화 끝
    64.23s  agent 발화 끝
    64.51s  user  발화 시작: Afrikaans… so the name became more common *because* of that 
    69.52s  <ret> 발화 (turn13 첫 프레임)
    69.67s  agent 발화 시작: <ret> Precisely. The language helped the name integrate and 
    69.80s  user  발화 끝
    71.52s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.26s]: The surname du Plessis became particularly common among Afrikaners, sp
    73.83s  agent 발화 시작: The surname du Plessis became common among Afrikaners, those
    73.93s  agent 발화 끝
    78.41s  agent 발화 끝
    78.47s  user  발화 시작: But is it still a common name there now?
    81.04s  user  발화 시작: Is it still common in South Africa today?
    81.20s  user  발화 끝
    83.89s  <ret> 발화 (turn17 첫 프레임)
    84.05s  agent 발화 시작: <ret> It remains a widely recognized surname within South Af
    84.23s  user  발화 끝
    85.89s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.24s]: Du Plessis is currently the twenty-second most common surname in South
    87.28s  agent 발화 시작: It is currently the twenty-second most common surname in Sou
    87.29s  agent 발화 끝
    91.37s  user  발화 시작: Wow, that's… pretty high up the list. Are there any famous p
    91.49s  agent 발화 끝
    96.30s  <ret> 발화 (turn20 첫 프레임)
    96.38s  agent 발화 시작: <ret> There are several notable individuals who bear the nam
    96.55s  user  발화 끝
    97.66s  ⚡SPAN 주입 [d'=1.36s / d_lead=3.01s]: Faf du Plessis is a prominent South African cricketer, born in Pretori
    99.36s  agent 발화 시작: Faf du Plessis is a well-known South African cricketer, born
    99.39s  agent 발화 끝
   104.40s  agent 발화 끝
   104.76s  user  발화 시작: A cricketer! I think I've heard of him. Anything else?
   108.07s  <ret> 발화 (turn23 첫 프레임)
   108.23s  agent 발화 시작: <ret> Yes, there’s a historical figure as well.
   108.28s  user  발화 끝
   109.27s  ⚡SPAN 주입 [d'=1.20s / d_lead=2.35s]: François du Plessis, known as François Villon, was a 15th-century Fren
   110.54s  agent 발화 시작: François du Plessis, also known as François Villon, was a Fr
   110.59s  agent 발화 끝
   116.65s  agent 발화 끝
   117.81s  user  발화 시작: A poet? That's a nice contrast to the cricketer. So, the nam
   123.79s  <ret> 발화 (turn26 첫 프레임)
   124.11s  agent 발화 시작: <ret> Indeed, it reflects a complex interplay of migration, 
   124.21s  user  발화 끝
   125.79s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.14s]: The coat of arms associated with du Plessis features a silver lion on 
   129.21s  agent 발화 시작: The du Plessis coat of arms displays a silver lion on a blue
   129.25s  agent 발화 끝
   134.68s  user  발화 시작: A lion… fitting for a name meaning ‘of the castle’. Are ther
   134.86s  agent 발화 끝
   140.39s  <ret> 발화 (turn29 첫 프레임)
   140.55s  agent 발화 시작: <ret> Variations exist, though “du Plessis” is the most comm
   140.75s  user  발화 끝
   141.67s  ⚡SPAN 주입 [d'=1.28s / d_lead=3.23s]: Alternative spellings of du Plessis include Duplessis and Duplesis, va
   143.72s  agent 발화 시작: Other spellings include Duplessis and Duplesis, mainly found
   143.78s  agent 발화 끝
   148.03s  user  발화 시작: Canada, too? It really *has* traveled around. That's quite a
   148.07s  agent 발화 끝
   153.35s  <ret> 발화 (turn32 첫 프레임)
   153.43s  agent 발화 시작: <ret> It is a testament to the enduring power of family lega
   153.63s  user  발화 끝
   154.63s  ⚡SPAN 주입 [d'=1.28s / d_lead=4.12s]: The name du Plessis is also found, though less commonly, in Belgium an
   157.50s  agent 발화 시작: The name du Plessis is also found, though less common, in Be
   157.54s  agent 발화 끝
   162.83s  agent 발화 끝
   163.29s  user  발화 시작: So, it's all over the place now. A French name with roots ev
   168.29s  user  발화 끝
   168.46s  <ret> 발화 (turn35 첫 프레임)
   168.54s  agent 발화 시작: <ret> Precisely. It’s a striking example of how names can tr
   170.46s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.09s]: The etymological root of "Plessis" derives from the Old French word "p
   175.46s  agent 발화 시작: The word "Plessis" comes from the Old French word "pleisse,"
   175.63s  agent 발화 끝
   180.41s  user  발화 시작: That’s a lovely image – an enclosed courtyard. Thank you for
   180.55s  agent 발화 끝
   185.75s  agent 발화 시작: You are most welcome. Exploring the histories embedded withi
   185.87s  user  발화 끝
   192.09s  agent 발화 끝
