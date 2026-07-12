# v3_pause_16_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pause_16",
#     "name": "Iris",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-08",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2026-04-20",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2025-11-11",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-09-16",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2025-09-03",
#       "category": "work",
#       "text": "User works as a physical therapist."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-05",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I was just wondering… | S2 …in Seoul right now? | S3 Fantastic! Thank you so much. | S4 Do you know what…

     0.00s  user  발화 시작: I was just wondering…
     1.74s  agent 발화 시작: It’s alright to wonder, truly. What’s on your mind today?
     1.74s  user  발화 끝
     6.10s  user  발화 시작: Mm-hmm.
     6.10s  agent 발화 끝
     6.54s  user  발화 시작: …who voices Woody in Toy Story?
     6.54s  user  발화 끝
     8.99s  <ret> 발화 (turn4 첫 프레임)
     9.15s  agent 발화 시작: <ret> It’s Tom Hanks who has provided the voice for Woody in
     9.15s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.41s]: Tom Hanks has provided the voice for the character of Woody in all of 
     9.15s  user  발화 끝
    16.56s  user  발화 시작: Oh, wow, really? I always thought it sounded familiar.
    16.56s  agent 발화 끝
    20.48s  agent 발화 시작: It’s a very recognizable voice, isn’t it? He truly brings Wo
    20.48s  user  발화 끝
    26.14s  user  발화 시작: Do you think he’s done other voice work?
    26.14s  agent 발화 끝
    29.55s  <ret> 발화 (turn8 첫 프레임)
    29.63s  agent 발화 시작: <ret> He voiced Woody in Toy Story, 1995, and continued thro
    29.63s  ⚡SPAN 주입 [d'=1.44s / d_lead=6.54s]: Tom Hanks voiced Woody in Toy Story (1995), Toy Story 2 (1999), Toy St
    29.63s  user  발화 끝
    36.16s  user  발화 시작: Yeah, totally.
    36.16s  agent 발화 끝
    37.03s  agent 발화 시작: It is quite a commitment, and a beloved one at that. A wonde
    37.03s  user  발화 끝
    43.13s  user  발화 시작: Yeah.
    43.13s  agent 발화 끝
    43.57s  user  발화 시작: What about the weather…
    43.57s  user  발화 끝
    45.31s  user  발화 시작: …in Seoul right now?
    45.31s  user  발화 끝
    46.81s  <ret> 발화 (turn14 첫 프레임)
    47.05s  agent 발화 시작: <ret> The current conditions in Seoul are 26.0°C, with 68% h
    47.05s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.54s]: (tool result) Current conditions in Seoul are 26.0°C, humidity 68%, wi
    47.05s  user  발화 끝
    53.59s  user  발화 시작: That sounds quite pleasant.
    53.59s  agent 발화 끝
    55.33s  agent 발화 시작: It does sound lovely, doesn’t it? A very comfortable tempera
    55.33s  user  발화 끝
    59.69s  user  발화 시작: Right.
    59.69s  agent 발화 끝
    60.12s  user  발화 시작: Is there a good Italian restaurant nearby?
    60.12s  user  발화 끝
    62.93s  <ret> 발화 (turn19 첫 프레임)
    63.17s  agent 발화 시작: <ret> Bella Italia is 0.8 km away, with 4.5 stars, and Pasta
    63.17s  ⚡SPAN 주입 [d'=1.60s / d_lead=7.84s]: (tool result) Bella Italia: 4.5 stars, 0.8 km, Italian, $$; Pasta Para
    63.17s  user  발화 끝
    71.02s  user  발화 시작: Uh-huh.
    71.02s  agent 발화 끝
    71.45s  user  발화 시작: Hmm, Bella Italia sounds good. Can you make a reservation fo
    71.45s  user  발화 끝
    76.52s  <ret> 발화 (turn22 첫 프레임)
    76.68s  agent 발화 시작: <ret> Your reservation at Bella Italia for two is confirmed 
    76.68s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.54s]: (tool result) Reservation confirmed at Bella Italia for 2 people on Ju
    76.68s  user  발화 끝
    83.21s  user  발화 시작: Mm-hmm.
    83.21s  agent 발화 끝
    83.65s  user  발화 시작: Fantastic! Thank you so much.
    83.65s  user  발화 끝
    85.83s  agent 발화 시작: You are very welcome. I’m glad I could help with that.
    85.83s  user  발화 끝
    90.62s  user  발화 시작: Uh-huh.
    90.62s  agent 발화 끝
    91.06s  user  발화 시작: What time is it in Tokyo right now?
    91.06s  user  발화 끝
    94.14s  <ret> 발화 (turn28 첫 프레임)
    94.54s  agent 발화 시작: <ret> It is currently 8:38 PM in Asia/Tokyo, on Friday, July
    94.54s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.23s]: (tool result) It is Friday, July 10, 2026 at 8:38 PM in Asia/Tokyo rig
    94.54s  user  발화 끝
    99.77s  user  발화 시작: Wow, so much later than here.
    99.77s  agent 발화 끝
   102.38s  agent 발화 시작: Time truly does move at different paces depending on where y
   102.38s  user  발화 끝
   107.61s  user  발화 시작: Yeah.
   107.61s  agent 발화 끝
   108.05s  user  발화 시작: [sigh] I need to remember to call my sister.
   108.05s  user  발화 끝
   111.97s  agent 발화 시작: That's a very thoughtful thing to do. Staying connected is s
   111.97s  user  발화 끝
   117.20s  user  발화 시작: Yeah.
   117.20s  agent 발화 끝
   117.63s  user  발화 시작: Do you know what…
   117.63s  user  발화 끝
   119.38s  user  발화 시작: …the capital of Australia is?
   119.38s  user  발화 끝
   121.31s  <ret> 발화 (turn37 첫 프레임)
   121.55s  agent 발화 시작: <ret> Canberra is the capital city of Australia, chosen as a
   121.55s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.54s]: Canberra is the capital city of Australia; Sydney and Melbourne are mo
   121.55s  user  발화 끝
   128.09s  user  발화 시작: Yeah.
   128.09s  agent 발화 끝
   128.53s  user  발화 시작: That’s interesting, I always thought it was Sydney.
   128.53s  user  발화 끝
   132.01s  agent 발화 시작: It’s a common misconception, you’re not alone. It’s a beauti
   132.01s  user  발화 끝
   137.24s  user  발화 시작: I think I’ll look up some pictures of Canberra.
   137.24s  agent 발화 끝
   141.16s  agent 발화 시작: That sounds like a lovely idea. Sometimes a visual helps bri
   141.16s  user  발화 끝
   147.70s  agent 발화 끝
