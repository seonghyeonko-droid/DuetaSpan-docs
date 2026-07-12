# v3_backg_17_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_backg_17",
#     "name": "Leo",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "male",
#     "age_range": "50s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-22",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2026-05-12",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in October."
#     },
#     {
#       "date": "2026-01-10",
#       "category": "work",
#       "text": "User works as a architect."
#     },
#     {
#       "date": "2025-06-02",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-07-30",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Who played Krish in Kabhi Khushi K | S2 Wow, he was really young during fi | S3 What other movies has he been in? | S4 …check that one out.

     0.00s  user  발화 시작: Who played Krish in Kabhi Khushi Kabhie Gham?
     2.52s  <ret> 발화 (turn1 첫 프레임)
     2.92s  agent 발화 시작: <ret> That would be Jibraan Khan, who played young Krish Rai
     2.92s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.47s]: Jibraan Khan played the role of Krish Raichand in the 2001 Bollywood f
     2.92s  user  발화 끝
     8.39s  user  발화 시작: Oh, right! I remember now.
     8.39s  agent 발화 끝
    10.21s  agent 발화 시작: It’s a very memorable role, even after all these years.
    10.21s  user  발화 끝
    13.86s  user  발화 시작: Okay.
    13.86s  agent 발화 끝
    14.22s  user  발화 시작: Do you know when he was born?
    14.22s  user  발화 끝
    16.61s  <ret> 발화 (turn6 첫 프레임)
    16.77s  agent 발화 시작: <ret> Jibraan Khan was born on December tenth, 1994, in Mumb
    16.77s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.01s]: Jibraan Khan was born on December 10, 1994, in Mumbai, Maharashtra, In
    16.77s  user  발화 끝
    20.79s  user  발화 시작: Mm-hmm.
    20.79s  agent 발화 끝
    21.15s  user  발화 시작: Wow, he was really young during filming.
    21.15s  user  발화 끝
    23.70s  agent 발화 시작: He was quite young, indeed—
    23.70s  user  발화 끝
    25.53s  user  발화 시작: …was that his first role?
    25.53s  agent 발화 끝
    27.35s  agent 발화 시작: That wasn't actually his first role; he had appeared in a fe
    27.35s  user  발화 끝
    32.45s  user  발화 시작: Yeah.
    32.45s  agent 발화 끝
    32.82s  agent 발화 시작: Yes, he did some modeling and commercials before Kabhi Khush
    32.82s  user  발화 끝
    37.19s  user  발화 시작: What other movies has he been in?
    37.19s  agent 발화 끝
    39.51s  <ret> 발화 (turn15 첫 프레임)
    39.75s  agent 발화 시작: <ret> He's also appeared in films like "Delhi Heights" from 
    39.75s  ⚡SPAN 주입 [d'=1.68s / d_lead=5.47s]: Jibraan Khan has appeared in films like "Delhi Heights" (2007) and "Ek
    39.75s  user  발화 끝
    45.22s  user  발화 시작: Okay.
    45.22s  agent 발화 끝
    45.58s  user  발화 시작: Okay, that's good to know. Anything recent?
    45.58s  user  발화 끝
    48.05s  <ret> 발화 (turn18 첫 프레임)
    48.13s  agent 발화 시작: <ret> His most recent work is in “Maja Ma” from 2022, where 
    48.13s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.11s]: His most recent credited role is in the 2022 film "Maja Ma", where he 
    48.13s  user  발화 끝
    53.24s  user  발화 시작: Exactly.
    53.24s  agent 발화 끝
    53.60s  user  발화 시작: That's interesting! I might…
    53.60s  user  발화 끝
    55.06s  user  발화 시작: …check that one out.
    55.06s  user  발화 끝
    56.52s  agent 발화 시작: It’s a wonderful film, and a bit different from his earlier 
    56.52s  user  발화 끝
    60.90s  user  발화 시작: Do you know if he’s still acting?
    60.90s  agent 발화 끝
    63.45s  agent 발화 시작: As far as my information goes, yes, he is still actively pur
    63.45s  user  발화 끝
    68.19s  agent 발화 끝
