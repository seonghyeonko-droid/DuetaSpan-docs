# v3_rag_28_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "Robin",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "non-binary",
#     "age_range": "early 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-07",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in August."
#     },
#     {
#       "date": "2025-12-28",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2025-11-06",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2025-10-16",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-09-11",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2025-07-14",
#       "category": "work",
#       "text": "User works as a chef."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-08-01",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hey, do you ever feel… | S2 Um, yeah, unique is one word for i | S3 I guess so. I need to find a good  | S4 We did. We still do, mostly. She’s

     0.00s  user  발화 시작: Hey, do you ever feel…
     1.47s  user  발화 끝
     2.75s  user  발화 시작: …like you just need a break from everything?
     4.68s  user  발화 끝
     4.83s  agent 발화 시작: Oh, absolutely. It's so important to recognize when you're f
    12.30s  agent 발화 끝
    13.37s  user  발화 시작: Well, I was just wondering… who played the Cat in the Hat in
    16.85s  <ret> 발화 (turn4 첫 프레임)
    17.25s  agent 발화 시작: <ret> That role was wonderfully played by Mike Myers, in the
    17.25s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.93s]: Mike Myers portrayed the Cat in the Hat in the 2003 film adaptation of
    17.26s  user  발화 끝
    25.17s  agent 발화 끝
    25.21s  user  발화 시작: Um, yeah, unique is one word for it. Is it raining right now
    28.58s  <ret> 발화 (turn6 첫 프레임)
    28.98s  agent 발화 시작: <ret> It is currently raining, with a temperature of 22.0 de
    28.98s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.30s]: (tool result) Current conditions are 22.0°C, humidity 88%, wind 3.1 km
    29.10s  user  발화 끝
    31.51s  user  발화 시작: Uh-huh.
    31.95s  user  발화 끝
    34.92s  user  발화 시작: Cozy? It's kind of depressing, honestly.
    35.28s  agent 발화 끝
    37.30s  agent 발화 시작: [sigh] I understand. Gray days can definitely affect your mo
    37.37s  user  발화 끝
    41.22s  user  발화 시작: Okay.
    41.71s  user  발화 끝
    44.90s  agent 발화 끝
    45.24s  user  발화 시작: I guess so. I need to find a good movie to watch. Something 
    48.44s  <ret> 발화 (turn12 첫 프레임)
    48.84s  agent 발화 시작: <ret> I found "Paddington 2", a really well-loved comedy fro
    48.84s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.77s]: (tool result) "Paddington 2" is a critically acclaimed comedy film rel
    48.90s  user  발화 끝
    53.45s  user  발화 시작: Exactly.
    54.27s  user  발화 끝
    55.60s  agent 발화 끝
    55.86s  user  발화 시작: Paddington? I’ve heard of it. What about something… older? L
    61.19s  user  발화 끝
    61.26s  <ret> 발화 (turn15 첫 프레임)
    61.33s  agent 발화 시작: <ret> There’s "Home Alone", a classic 1990 comedy directed b
    61.34s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.19s]: (tool result) "Home Alone" is a 1990 American Christmas comedy film di
    68.42s  user  발화 시작: Oh, yeah, "Home Alone"! That’s a good one. My sister loved t
    68.52s  agent 발화 끝
    72.40s  agent 발화 시작: It’s funny how movies can bring back such strong memories of
    72.44s  user  발화 끝
    79.41s  user  발화 시작: We did. We still do, mostly. She’s going through a rough pat
    79.49s  agent 발화 끝
    84.13s  user  발화 끝
    84.24s  agent 발화 시작: That's really thoughtful of you to share that. It’s wonderfu
    89.62s  user  발화 시작: Yeah.
    90.16s  user  발화 끝
    91.33s  user  발화 시작: I want to send her flowers. Can you help with that?
    91.66s  agent 발화 끝
    94.00s  user  발화 끝
    94.19s  agent 발화 시작: Of course I can. It's a lovely idea. What city does your sis
    99.75s  agent 발화 끝
