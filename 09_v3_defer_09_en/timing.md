# v3_defer_09_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_09",
#     "name": "Clara",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-02",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2026-04-09",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2026-03-09",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2026-02-23",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2025-12-21",
#       "category": "home",
#       "text": "User's home address is 375 Oak Avenue."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-31",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2026-04-23",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 How high up is the Eiffel Tower lo | S2 Yeah. I’ve been having trouble sle | S3 Stretching sounds nice. Maybe yoga | S4 Can you set an alarm for 7:00 AM t

     0.00s  user  발화 시작: How high up is the Eiffel Tower located?
     3.06s  <ret> 발화 (turn1 첫 프레임)
     3.18s  ⚡SPAN 주입 [d'=0.85s / d_lead=7.69s]: The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars 
     3.24s  agent 발화 시작: <ret> The Eiffel Tower reaches a height of one thousand eigh
     3.24s  user  발화 끝
    10.93s  user  발화 시작: Yeah.
    10.93s  agent 발화 끝
    11.33s  user  발화 시작: That’s really tall. What about Mount Everest?
    11.33s  user  발화 끝
    14.07s  <ret> 발화 (turn4 첫 프레임)
    14.17s  agent 발화 시작: <ret> Mount Everest is even more towering, reaching twenty-n
    14.17s  user  발화 끝
    14.17s  ⚡SPAN 주입 [d'=1.33s / d_lead=8.10s]: Mount Everest, located in the Mahalangur Himal sub-range of the Himala
    22.26s  user  발화 시작: Wow. Um…
    22.26s  agent 발화 끝
    23.07s  agent 발화 시작: It really puts things into perspective, doesn’t it? Thinking
    23.07s  user  발화 끝
    27.93s  user  발화 시작: Yeah. I’ve been having trouble sleeping lately.
    27.93s  agent 발화 끝
    30.76s  agent 발화 시작: [curious] Oh, I’m sorry to hear that. Sleep is so important 
    30.76s  user  발화 끝
    39.27s  user  발화 시작: Just…a lot on my mind, I guess. Work stress.
    39.27s  agent 발화 끝
    42.91s  agent 발화 시작: That's very common, especially with work. A racing mind can 
    42.91s  user  발화 끝
    52.22s  user  발화 시작: Yeah.
    52.22s  agent 발화 끝
    52.62s  user  발화 시작: Not really. I just kind of…fall into bed when I’m tired.
    52.62s  user  발화 끝
    57.08s  agent 발화 시작: [sigh] Falling into bed can make it harder to settle. A rout
    57.08s  user  발화 끝
    68.01s  user  발화 시작: Stretching sounds nice. Maybe yoga.
    68.01s  agent 발화 끝
    70.03s  agent 발화 시작: Yoga is a wonderful way to release tension. Even five or ten
    70.03s  user  발화 끝
    77.72s  user  발화 시작: Okay. Can you find me some beginner yoga videos for sleep?
    77.72s  agent 발화 끝
    81.85s  <ret> 발화 (turn17 첫 프레임)
    82.17s  agent 발화 시작: <ret> I found a video titled “Yoga With Adriene - Yoga For B
    82.17s  user  발화 끝
    82.59s  ⚡SPAN 주입 [d'=0.74s / d_lead=8.50s]: (tool result) {"title": "Yoga With Adriene - Yoga For Bedtime", "url":
    90.68s  user  발화 시작: Uh-huh.
    90.68s  agent 발화 끝
    91.08s  user  발화 시작: No, just the title is fine. Thanks.
    91.08s  user  발화 끝
    93.91s  agent 발화 시작: You're very welcome. It’s good you’re taking steps to priori
    93.91s  user  발화 끝
   102.82s  user  발화 시작: Can you set an alarm for 7:00 AM tomorrow?
   102.82s  agent 발화 끝
   106.38s  <ret> 발화 (turn23 첫 프레임)
   106.46s  agent 발화 시작: Mhm.
   106.46s  user  발화 끝
   106.87s  agent 발화 시작: <ret> I've set an alarm for seven o’clock tomorrow morning. 
   106.87s  agent 발화 끝
   107.24s  ⚡SPAN 주입 [d'=0.86s / d_lead=5.26s]: (tool result) Alarm set for 7:00 AM. Confirmation ID: 92X7B
   112.13s  user  발화 시작: Great. What’s the weather like in Busan tomorrow?
   112.13s  agent 발화 끝
   115.16s  <ret> 발화 (turn25 첫 프레임)
   115.37s  agent 발화 시작: <ret> Tomorrow in Busan, it’ll be twenty-six point five degr
   115.37s  user  발화 끝
   116.12s  ⚡SPAN 주입 [d'=1.43s / d_lead=9.31s]: (tool result) Busan: 26.5°C, humidity 78%, wind 3.1 km/h, partly cloud
   124.68s  user  발화 시작: Yeah.
   124.68s  agent 발화 끝
   125.08s  user  발화 시작: That sounds pleasant. Give me a moment…
   125.08s  user  발화 끝
   127.92s  agent 발화 시작: Take your time. I'm here when you're ready.
   127.92s  user  발화 끝
   130.26s  ⚡지연 SPAN 주입(선제발표 직전): The restaurant “Gogung Myeongga” in Haeundae, Busan, is a Korean BBQ r
   131.16s  agent 발화 시작: <ret> Just a moment while I check on that restaurant search.
   131.16s  agent 발화 끝
   147.75s  agent 발화 끝
