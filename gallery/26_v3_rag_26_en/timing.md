# v3_rag_26_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_26",
#     "name": "Samuel",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "male",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-23",
#       "category": "work",
#       "text": "User works as a marketing manager."
#     },
#     {
#       "date": "2025-11-15",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-10-29",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2025-09-17",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2025-09-15",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2025-06-23",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in December."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-29",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-03-28",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-02-20",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I'm trying to understand the Chine | S2 That’s a pretty significant year,  | S3 …but was it comparable to what the | S4 Do they still have that tension to

     0.00s  user  발화 시작: I'm trying to understand the Chinese Civil War better.
     3.24s  user  발화 끝
     3.29s  agent 발화 시작: I can help with that. It’s a complex period in history.
     6.67s  user  발화 시작: Who was the main leader on the nationalist side?
     6.76s  agent 발화 끝
     9.56s  <ret> 발화 (turn3 첫 프레임)
     9.73s  user  발화 끝
     9.80s  agent 발화 시작: <ret> The main leader of the nationalist side was Chiang Kai
     9.80s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.04s]: Chiang Kai-shek led the Nationalist government of the Republic of Chin
    16.24s  user  발화 시작: That’s right, Chiang Kai-shek. What about Mao Zedong?
    16.85s  agent 발화 끝
    20.18s  user  발화 끝
    20.35s  agent 발화 시작: Mao Zedong was the leader of the Communist Party of China, n
    22.91s  user  발화 시작: Yeah.
    23.36s  user  발화 끝
    24.75s  agent 발화 끝
    24.86s  user  발화 시작: And when did the communists actually win the war?
    27.55s  <ret> 발화 (turn8 첫 프레임)
    27.87s  agent 발화 시작: <ret> The Communist Party won the war in 1949, establishing 
    27.87s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.42s]: The Chinese Communist Party won the Chinese Civil War in 1949, establi
    27.95s  user  발화 끝
    33.29s  agent 발화 끝
    33.39s  user  발화 시작: That’s a pretty significant year, isn’t it?
    35.95s  agent 발화 시작: It truly was; it marked a huge shift in China’s direction.
    36.07s  user  발화 끝
    39.82s  user  발화 시작: Were there any major battles before the final takeover?
    39.84s  agent 발화 끝
    43.04s  <ret> 발화 (turn12 첫 프레임)
    43.41s  agent 발화 시작: <ret> One major battle was the Battle of Huaihai, fought fro
    43.44s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.44s]: The Battle of Huaihai, fought from November 1948 to January 1949, was 
    43.62s  user  발화 끝
    45.94s  user  발화 시작: Yeah.
    46.30s  user  발화 끝
    49.69s  agent 발화 시작: It was a really pivotal moment, shifting the balance of powe
    49.85s  agent 발화 끝
    50.75s  user  발화 시작: Okay.
    51.52s  user  발화 끝
    52.92s  agent 발화 끝
    54.77s  user  발화 시작: What kind of support did the nationalists have from other co
    58.61s  <ret> 발화 (turn17 첫 프레임)
    58.69s  agent 발화 시작: <ret> The Nationalist government received financial and mili
    58.69s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.14s]: The Nationalist government received significant financial and military
    58.84s  user  발화 끝
    63.83s  agent 발화 끝
    63.97s  user  발화 시작: That's interesting. Did the communists get help too?.
    67.22s  agent 발화 시작: The Soviet Union did offer some support to the communists—
    67.35s  user  발화 끝
    70.33s  user  발화 시작: …but was it comparable to what the nationalists got from Ame
    71.05s  agent 발화 끝
    74.52s  agent 발화 시작: The Soviet support was less extensive than the American aid 
    74.54s  user  발화 끝
    77.29s  user  발화 시작: Yeah.
    77.65s  user  발화 끝
    78.99s  user  발화 시작: Okay, so a big difference in backing. What happened to Chian
    79.11s  agent 발화 끝
    84.81s  <ret> 발화 (turn24 첫 프레임)
    85.20s  agent 발화 시작: <ret> After losing, Chiang Kai-shek retreated to Taiwan and 
    85.21s  ⚡SPAN 주입 [d'=0.56s / d_lead=6.06s]: After losing the Chinese Civil War, Chiang Kai-shek retreated to Taiwa
    85.34s  user  발화 끝
    91.26s  agent 발화 끝
    91.87s  user  발화 시작: So he didn't just…disappear?
    94.15s  agent 발화 시작: No, he continued to lead a government in Taiwan for decades.
    94.31s  user  발화 끝
    95.85s  user  발화 시작: Yeah, yeah.
    97.13s  user  발화 끝
    98.64s  agent 발화 끝
    98.67s  user  발화 시작: What was the state of relations between mainland China and T
   103.62s  user  발화 끝
   103.65s  agent 발화 시작: Relations were very tense for a long time, with ongoing mili
   106.25s  user  발화 시작: Yeah, yeah.
   107.58s  user  발화 끝
   108.09s  agent 발화 끝
   108.82s  user  발화 시작: Do they still have that tension today?
   111.22s  user  발화 끝
   111.46s  agent 발화 시작: There’s still a complex relationship, though it’s evolved ov
   113.66s  user  발화 시작: Yeah.
   114.11s  user  발화 끝
   115.20s  agent 발화 끝
   115.30s  user  발화 시작: What about the economic situation in China after the communi
   119.97s  user  발화 끝
   120.03s  agent 발화 시작: They initially focused on land reform and collectivization o
   124.09s  user  발화 시작: Was that successful?
   124.19s  agent 발화 끝
   125.76s  agent 발화 시작: It had mixed results, leading to significant disruptions and
   125.94s  user  발화 끝
   130.62s  agent 발화 끝
