# v3_to_ot_11_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_11",
#     "name": "채온",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-18",
#       "category": "child",
#       "text": "User has a child named Jisoo, age 4."
#     },
#     {
#       "date": "2026-05-03",
#       "category": "streaming",
#       "text": "User subscribes to Twitch and Spotify."
#     },
#     {
#       "date": "2026-04-26",
#       "category": "gym",
#       "text": "User has a gym membership near the office."
#     },
#     {
#       "date": "2026-04-19",
#       "category": "diet",
#       "text": "User is low-sodium."
#     },
#     {
#       "date": "2026-02-26",
#       "category": "airline",
#       "text": "User usually flies with Korean Air."
#     },
#     {
#       "date": "2026-01-02",
#       "category": "anniversary",
#       "text": "User's anniversary is June 14."
#     },
#     {
#       "date": "2025-12-07",
#       "category": "dislike",
#       "text": "User can't stand olives."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-02",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing the Kia Niro hybrid and Hyundai Ioniq",
#         "wants under 30k miles and below 25M won"
#       ]
#     },
#     {
#       "date": "2026-04-08",
#       "title": "Meal-prep planning",
#       "bullets": [
#         "wants high-protein lunches under 600 calories",
#         "avoiding dairy this month"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 혹시 영화 '워크 더 라인'에 나오는 가수 누구야? | S2 잠깐만, 커피 한 잔만 더 내려줄래? | S3 음… '아틀라스 슈러그드'도 봤던 것 같은데. 그 영화는 어떤 | S4 다른 배우… 음, '워크 더 라인'에 리즈 위더스푼이랑 호아킨

     0.00s  user  발화 시작: 혹시 영화 '워크 더 라인'에 나오는 가수 누구야?
     2.94s  <ret> 발화 (turn1 첫 프레임)
     3.30s  agent 발화 시작: <ret> '워크 더 라인'에 나오는 가수는 웨일론 페인이랍니다.
     3.39s  ⚡SPAN 주입 [d'=0.46s / d_lead=3.19s]: Waylon Payne is an American actor and singer.
     3.56s  user  발화 끝
     6.49s  agent 발화 끝
     6.53s  user  발화 시작: 아, 웨일론 페인이구나. 그…
     8.79s  user  발화 끝
    10.83s  user  발화 시작: …사람 다른 영화에도 나왔어?
    12.39s  <ret> 발화 (turn4 첫 프레임)
    12.53s  agent 발화 시작: <ret> 네, 웨일론 페인은 '아틀라스 슈러그드'나 '어포슬' 같은 영화에도 출연했답니다.
    12.53s  user  발화 끝
    13.28s  ⚡SPAN 주입 [d'=0.89s / d_lead=4.67s]: Waylon Payne appeared in films such as "Atlas Shrugged" and "The Apost
    15.26s  user  발화 시작: 응.
    15.62s  user  발화 끝
    16.76s  user  발화 시작: 잠깐만, 커피 한 잔만 더 내려줄래?
    17.20s  agent 발화 끝
    18.76s  user  발화 시작: 아, 맞다. '어포슬'에서 어떤 역할이었지?
    18.88s  user  발화 끝
    20.81s  <ret> 발화 (turn8 첫 프레임)
    21.06s  agent 발화 시작: <ret> '어포슬'에서는 헨리 역할을 맡았다고 하네요.
    21.23s  ⚡SPAN 주입 [d'=0.41s / d_lead=2.58s]: In "The Apostle", Waylon Payne played the role of Henry.
    21.34s  user  발화 끝
    23.52s  user  발화 시작: 헨리 역할이었구나. 그 영화 기억 안 나는데.
    23.64s  agent 발화 끝
    26.29s  user  발화 끝
    26.38s  agent 발화 시작: 혹시 다른 영화는 기억하시나요? 웨일론 페인이 출연한 작품이 꽤 있거든요.
    31.34s  agent 발화 끝
    31.67s  user  발화 시작: 음… '아틀라스 슈러그드'도 봤던 것 같은데. 그 영화는 어떤 내용이었지?
    36.30s  <ret> 발화 (turn12 첫 프레임)
    36.69s  agent 발화 시작: <ret> '아틀라스 슈러그드'는 천구백오십칠년에 발표된 에인 랜드의 소설을 바탕으로 한 이천십일년 미국 정
    36.81s  user  발화 끝
    37.79s  ⚡SPAN 주입 [d'=1.49s / d_lead=8.30s]: "Atlas Shrugged" is a 2011 American political drama based on Ayn Rand'
    41.20s  user  발화 시작: 응응.
    41.69s  user  발화 끝
    44.98s  agent 발화 끝
    45.65s  user  발화 시작: 에인 랜드? 그 이름은 들어본 것 같아.
    48.04s  agent 발화 시작: 에인 랜드는 객관주의 철학으로 유명한 작가예요. [happy] 혹시 철학에 관심 있으세요?
    48.10s  user  발화 끝
    53.37s  user  발화 시작: 철학은 잘 모르겠고, 그냥 영화가 궁금해.
    53.41s  agent 발화 끝
    56.41s  agent 발화 시작: 네, 알겠습니다. 웨일론 페인에 대해 더 자세히 알아볼까요? 아니면 다른 배우에 대해 알아볼까요?
    56.51s  user  발화 끝
    58.74s  user  발화 시작: 그치.
    59.38s  user  발화 끝
    63.17s  agent 발화 끝
    63.94s  user  발화 시작: 다른 배우… 음, '워크 더 라인'에 리즈 위더스푼이랑 호아킨 피닉스 나왔잖아.
    66.26s  agent 발화 시작: 네.
    66.71s  agent 발화 끝
    68.26s  <ret> 발화 (turn21 첫 프레임)
    68.45s  agent 발화 시작: <ret> 네, 맞아요. 호아킨 피닉스와 리즈 위더스푼이 '워크 더 라인'에 주연으로 출연했답니다.
    68.52s  user  발화 끝
    68.89s  ⚡SPAN 주입 [d'=0.63s / d_lead=6.02s]: Joaquin Phoenix and Reese Witherspoon starred in "Walk the Line".
    70.77s  user  발화 시작: 응.
    71.17s  user  발화 끝
    74.42s  user  발화 시작: 호아킨 피닉스는 다른 영화에서도 많이 나왔지?
    74.48s  agent 발화 끝
    77.48s  user  발화 끝
    77.67s  agent 발화 시작: 호아킨 피닉스는 정말 다양한 영화에서 인상적인 연기를 보여줬어요. 어떤 영화가 궁금하신가요?
    79.89s  user  발화 시작: 응응.
    80.52s  user  발화 끝
    84.43s  agent 발화 끝
    85.21s  user  발화 시작: 글쎄… 지금 딱히 떠오르는 건 없어.
    87.70s  agent 발화 시작: 네, 알겠습니다. 혹시 스트레스 해소에 도움이 될 만한 간단한 호흡법을 알려드릴까요? [sigh] 요즘 날씨
    87.89s  user  발화 끝
    96.04s  agent 발화 끝
