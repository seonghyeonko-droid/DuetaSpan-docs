# v3_mem_32_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_32",
#     "name": "Casey",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "non-binary",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-11",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2026-03-26",
#       "category": "home",
#       "text": "User's home address is 834 Maple Drive."
#     },
#     {
#       "date": "2026-03-23",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     },
#     {
#       "date": "2025-09-22",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2025-06-25",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-10-02",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hi Marien, nice to meet you too. C | S2 Actually, I was thinking more abou | S3 …Actually, scratch that. I was won | S4 Perfect! That’s exactly what I nee

     0.00s  agent 발화 시작: Hi Casey, I'm Marien.
     1.38s  user  발화 시작: Hi Marien, nice to meet you too. Could you remind me what I 
     1.38s  agent 발화 끝
     7.52s  <ret> 발화 (turn2 첫 프레임)
     7.60s  agent 발화 시작: <ret> I have a note from October second of last year, where 
     7.60s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.56s]: [2025-10-02] Past chat — Researching a used car: comparing hybrid mode
     7.60s  user  발화 끝
    14.16s  user  발화 시작: Right.
    14.16s  agent 발화 끝
    14.51s  user  발화 시작: Oh, right! That’s helpful. And what did I say about food?
    14.51s  user  발화 끝
    18.22s  <ret> 발화 (turn5 첫 프레임)
    18.30s  agent 발화 시작: <ret> You told me on June eleventh that your favorite cuisin
    18.30s  ⚡SPAN 주입 [d'=1.36s / d_lead=4.14s]: [2026-06-11] User's favorite cuisine is sushi.
    18.30s  user  발화 끝
    22.45s  user  발화 시작: Okay.
    22.45s  agent 발화 끝
    22.79s  agent 발화 시작: That’s wonderful! Knowing your preferences helps me tailor s
    22.79s  user  발화 끝
    29.01s  user  발화 시작: Actually, I was thinking more about a trip. Do you remember 
    29.01s  agent 발화 끝
    36.26s  agent 발화 시작: Let me check my notes for any travel destinations you discus
    36.26s  user  발화 끝
    40.06s  user  발화 시작: …Actually, scratch that. I was wondering about my car search
    40.06s  agent 발화 끝
    46.20s  <ret> 발화 (turn11 첫 프레임)
    46.28s  agent 발화 시작: <ret> You were researching used hybrid cars with under thirt
    46.28s  ⚡SPAN 주입 [d'=0.64s / d_lead=4.49s]: [2025-10-02] Past chat — Researching a used car: comparing hybrid mode
    46.28s  user  발화 끝
    50.77s  user  발화 시작: Okay.
    50.77s  agent 발화 끝
    51.12s  user  발화 시작: Perfect! That’s exactly what I needed a reminder of. Thanks,
    51.12s  user  발화 끝
    54.91s  agent 발화 시작: You’re very welcome, Casey. I'm glad I could help jog your m
    54.91s  user  발화 끝
    59.06s  agent 발화 끝
