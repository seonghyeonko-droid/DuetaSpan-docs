# v3_selfc_07_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_07",
#     "name": "Lily",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-10",
#       "category": "show",
#       "text": "User is currently watching a historical K-drama."
#     },
#     {
#       "date": "2026-06-08",
#       "category": "work",
#       "text": "User works as a musician."
#     },
#     {
#       "date": "2026-06-06",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2026-05-20",
#       "category": "schedule",
#       "text": "User has a 9-to-6 weekday schedule."
#     },
#     {
#       "date": "2026-05-14",
#       "category": "gym",
#       "text": "User has a gym membership near the office."
#     },
#     {
#       "date": "2026-05-06",
#       "category": "wake",
#       "text": "User usually wakes up at 5:30am for a run."
#     },
#     {
#       "date": "2026-04-14",
#       "category": "dislike",
#       "text": "User can't stand durian."
#     },
#     {
#       "date": "2026-02-15",
#       "category": "medication",
#       "text": "User takes an inhaler for asthma."
#     },
#     {
#       "date": "2026-02-06",
#       "category": "music",
#       "text": "User likes listening to K-ballads."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-25",
#       "title": "Booking a moving company",
#       "bullets": [
#         "moving a 2-bedroom apartment across town on the 30th",
#         "needs help disassembling furniture"
#       ]
#     },
#     {
#       "date": "2026-02-04",
#       "title": "Building a PC",
#       "bullets": [
#         "budget around 2M won for gaming",
#         "torn between two GPUs"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I’m looking for flights from San F | S2 That’s alright. Can you search for | S3 The Park Hyatt sounds nice. | S4 That’s good to hear. I’ve been fee

     0.00s  user  발화 시작: I’m looking for flights from San Francisco to Tokyo, leaving
     5.54s  <ret> 발화 (turn1 첫 프레임)
     5.75s  agent 발화 시작: <ret> I found roundtrip flights from San Francisco to Tokyo 
     5.75s  user  발화 끝
     6.57s  ⚡SPAN 주입 [d'=1.03s / d_lead=8.98s]: (tool result) SFO to NRT, departing 2026-09-10, returning 2026-09-24, 
    14.73s  user  발화 시작: Oh, actually, make that September eleventh instead of the te
    14.73s  agent 발화 끝
    17.86s  <ret> 발화 (turn3 첫 프레임)
    18.32s  agent 발화 시작: <ret> Okay, departing September eleventh, the price is now o
    18.32s  user  발화 끝
    18.49s  ⚡SPAN 주입 [d'=0.64s / d_lead=6.11s]: (tool result) SFO to NRT, departing 2026-09-11, returning 2026-09-24, 
    24.43s  user  발화 시작: Yeah, yeah.
    24.43s  agent 발화 끝
    25.15s  agent 발화 시작: It’s a bit higher with that change, but sometimes a single d
    25.15s  user  발화 끝
    30.90s  user  발화 시작: That’s alright. Can you search for hotels in Shinjuku, too?
    30.90s  agent 발화 끝
    34.49s  agent 발화 시작: Yeah, yeah.
    34.49s  user  발화 끝
    34.98s  <ret> 발화 (turn8 첫 프레임)
    35.21s  agent 발화 시작: <ret> [curious] In Shinjuku, hotels start around one hundred
    35.21s  agent 발화 끝
    35.87s  ⚡SPAN 주입 [d'=1.05s / d_lead=8.62s]: (tool result) Shinjuku hotels start at $110/night; Park Hyatt Tokyo is
    43.83s  user  발화 시작: Yeah, yeah.
    43.83s  agent 발화 끝
    44.55s  user  발화 시작: The Park Hyatt sounds nice.
    44.55s  user  발화 끝
    46.34s  agent 발화 시작: It’s quite renowned—a calming space for reflection, if you'r
    46.34s  user  발화 끝
    51.01s  user  발화 시작: That’s good to hear. I’ve been feeling pretty lost lately.
    51.01s  agent 발화 끝
    54.61s  agent 발화 시작: [happy] It's perfectly okay to feel lost; letting those feel
    54.61s  user  발화 끝
    65.39s  agent 발화 끝
