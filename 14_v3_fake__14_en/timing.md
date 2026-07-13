# v3_fake__14_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__14",
#     "name": "Maya",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-15",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2026-05-31",
#       "category": "home",
#       "text": "User's home address is 48 Pine Court."
#     },
#     {
#       "date": "2026-03-17",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2026-02-02",
#       "category": "work",
#       "text": "User works as a high-school teacher."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-02",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-03-29",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hi Brol, I was wondering when the  | S2 Was it difficult to build the Whit | S3 Do they have records of who built  | S4 Wow, it was burned down? That's cr

     0.00s  user  발화 시작: Hi Brol, I was wondering when the White House became the off
     5.04s  <ret> 발화 (turn1 첫 프레임)
     5.18s  ⚡SPAN 주입 [d'=0.30s / d_lead=8.05s]: The White House became the official residence of the President of the 
     5.24s  agent 발화 시작: <ret> The White House officially became the presidential res
     5.24s  user  발화 끝
    13.29s  user  발화 시작: Uh-huh.
    13.29s  agent 발화 끝
    13.69s  user  발화 시작: Wow, that's earlier than I thought.
    13.69s  user  발화 끝
    16.11s  agent 발화 시작: It is! It's easy to assume it was always the center of power
    16.11s  user  발화 끝
    22.15s  user  발화 시작: Mm-hmm.
    22.15s  agent 발화 끝
    22.55s  user  발화 시작: What was there before that, though? Where did presidents liv
    22.55s  user  발화 끝
    26.20s  <ret> 발화 (turn7 첫 프레임)
    26.52s  ⚡SPAN 주입 [d'=0.90s / d_lead=7.65s]: Before the White House, presidents primarily resided in Philadelphia, 
    26.58s  agent 발화 시작: <ret> Before the White House, presidents primarily lived in 
    26.58s  user  발화 끝
    34.23s  user  발화 시작: Yeah, totally.
    34.23s  agent 발화 끝
    35.04s  user  발화 시작: Philadelphia, huh? That's a change of scenery.
    35.04s  user  발화 끝
    37.69s  <ret> 발화 (turn10 첫 프레임)
    37.86s  agent 발화 시작: <ret> Sometimes a change of scenery can be really refreshing
    37.86s  user  발화 끝
    38.86s  ⚡SPAN 주입(IRRELEVANT) [d'=1.16s / d_lead=3.62s]: The current price of Brent crude oil is $85.25 per barrel, with a dail
    41.48s  user  발화 시작: Mm-hmm.
    41.48s  agent 발화 끝
    41.89s  user  발화 시작: Was it difficult to build the White House back then?
    41.89s  user  발화 끝
    45.35s  <ret> 발화 (turn13 첫 프레임)
    45.82s  ⚡SPAN 주입 [d'=0.47s / d_lead=4.83s]: Construction of the White House began in 1792, following a design comp
    45.91s  agent 발화 시작: <ret> Construction began in 1792, designed by James Hoban, a
    45.91s  user  발화 끝
    50.75s  user  발화 시작: …did they use enslaved people to build it?
    50.75s  agent 발화 끝
    53.52s  <ret> 발화 (turn15 첫 프레임)
    53.91s  ⚡SPAN 주입 [d'=0.99s / d_lead=7.65s]: Historical records confirm that enslaved African Americans, along with
    53.97s  agent 발화 시작: <ret> Historical records confirm that enslaved African Ameri
    53.97s  user  발화 끝
    61.62s  user  발화 시작: That’s awful. It’s hard to think about the history sometimes
    61.62s  agent 발화 끝
    65.65s  agent 발화 시작: Right.
    65.65s  user  발화 끝
    66.05s  agent 발화 시작: It absolutely is. Acknowledging the difficult parts is impor
    66.05s  agent 발화 끝
    69.68s  user  발화 시작: Mm-hmm.
    69.68s  agent 발화 끝
    70.08s  agent 발화 시작: We can learn from those past injustices to build a better fu
    70.08s  user  발화 끝
    74.91s  user  발화 시작: Right.
    74.91s  agent 발화 끝
    75.31s  user  발화 시작: Do they have records of who built it, names and everything?
    75.31s  user  발화 끝
    79.46s  <ret> 발화 (turn23 첫 프레임)
    79.68s  ⚡SPAN 주입 [d'=0.60s / d_lead=8.86s]: While a complete list of all workers remains unavailable, historical r
    79.74s  agent 발화 시작: <ret> While a complete list isn’t available, research has id
    79.74s  user  발화 끝
    88.60s  user  발화 시작: Yeah.
    88.60s  agent 발화 끝
    89.01s  user  발화 시작: That’s good to know their stories are being remembered.
    89.01s  user  발화 끝
    92.63s  agent 발화 시작: It is. Their contributions deserve to be recognized.
    92.63s  user  발화 끝
    95.85s  user  발화 시작: So, after the Adams moved in, was it immediately popular?
    95.85s  agent 발화 끝
    99.35s  <ret> 발화 (turn28 첫 프레임)
    99.82s  ⚡SPAN 주입 [d'=1.50s / d_lead=6.44s]: Initially, the White House faced criticism for its unfinished state an
    99.88s  agent 발화 시작: <ret> Initially, the White House faced criticism for being u
    99.88s  user  발화 끝
   106.32s  user  발화 시작: What kind of renovations?
   106.32s  agent 발화 끝
   107.72s  <ret> 발화 (turn30 첫 프레임)
   107.94s  agent 발화 시작: <ret> Major changes included rebuilding after the 1814 fire,
   107.94s  user  발화 끝
   108.96s  ⚡SPAN 주입 [d'=1.24s / d_lead=7.25s]: Significant renovations included the reconstruction after the British 
   115.19s  user  발화 시작: Oh.
   115.19s  agent 발화 끝
   115.59s  user  발화 시작: Wow, it was burned down? That's crazy!
   115.59s  user  발화 끝
   118.41s  agent 발화 시작: [surprised] It really was! A very difficult time in its hist
   118.41s  user  발화 끝
   122.84s  user  발화 시작: Yeah.
   122.84s  agent 발화 끝
   123.24s  user  발화 시작: So it's been through a lot, that building.
   123.24s  user  발화 끝
   126.46s  agent 발화 시작: It's a symbol of resilience, wouldn't you say?
   126.46s  user  발화 끝
   129.68s  agent 발화 시작: It has certainly seen a lot of history unfold within its wal
   129.68s  agent 발화 끝
   134.52s  user  발화 시작: I guess so. Thanks for all the info, Brol.
   134.52s  agent 발화 끝
   138.14s  agent 발화 시작: You're very welcome! I'm glad I could share some of that his
   138.14s  user  발화 끝
   147.00s  agent 발화 끝
