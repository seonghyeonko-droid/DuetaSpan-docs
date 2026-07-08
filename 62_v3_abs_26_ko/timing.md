# v3_abs_26_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 걔가 지지자들이 뭐라고 불리지 않았는지 궁금하네.
     3.25s  agent 발화 시작: <ret> 음, 찾기가 쉽지 않네. 존 위클리프 지지자들이 뭐라고 불리지 않았는지 역사 기록에는 없어. 그들
     3.25s  <ret> 발화 (turn1 첫 프레임)
     3.25s  user  발화 끝
     4.25s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.17s]: (no information found)
    16.25s  user  발화 시작: 그래. 그럼 뭐라고 불렸는데?
    16.25s  agent 발화 끝
    18.42s  agent 발화 시작: 걔네들은 '롤라드'라고 불렸어. 처음에는 비꼬는 의미였는데—사실상 '재잘거리는 사람들' 같은 뜻이었지. 걔네
    18.42s  user  발화 끝
    28.17s  user  발화 시작: 흥미롭네. 음, 올멕 문명은 어때? 어디에 있었어?
    28.17s  agent 발화 끝
    31.97s  agent 발화 시작: <ret> 정말 매력적인 문화야! 올멕의 중심지는 멕시코 중남부의 열대 저지대에 있었어—구체적으로는 현재의 
    31.97s  <ret> 발화 (turn5 첫 프레임)
    31.97s  user  발화 끝
    32.97s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.63s]: The Olmec civilization flourished in the tropical lowlands of south-ce
    42.26s  user  발화 시작: 그럼 뭘로 유명해?
    42.26s  agent 발화 끝
    43.89s  agent 발화 시작: 올멕은 많은 메소아메리카 문명의 모체로 여겨져. 거대한 머리 조각, 발전된 농업 방식, 초기 문자 체계로 유
    43.89s  user  발화 끝
    52.56s  user  발화 시작: 거대한 머리… 와우. 그러니까, 얼마나 큰데?
    52.56s  agent 발화 끝
    55.81s  agent 발화 시작: <ret> 꽤 웅장해! 거대한 머리는 크기가 다양해서 높이가 1.47미터에서 3.5미터에 달하고 무게는 6톤
    55.81s  <ret> 발화 (turn9 첫 프레임)
    55.81s  user  발화 끝
    56.13s  ⚡SPAN 주입 [d'=0.32s / d_lead=1.08s]: The colossal heads range in size from 1.47 to 3.5 meters tall and weig
    65.56s  user  발화 시작: 25톤! 대단하네. 금속 도구를 썼어?
    65.56s  agent 발화 끝
    68.27s  agent 발화 시작: 딱히 그렇지 않아. 주로 돌 도구를 썼어—현무암 같은 거—그리고 많은 인력을 동원했지. 금속 가공 없이도 그
    68.27s  user  발화 끝
    80.73s  user  발화 시작: 음-음. 종교는 어땠어? 올멕 사람들은 뭘 믿었어?
    80.73s  agent 발화 끝
    84.52s  agent 발화 시작: <ret> 걔네들의 믿음은 복잡했어. 올멕 사람들은 여러 신을 숭배했는데, 특히 재규어가 중요한 위치를 차지
    84.52s  <ret> 발화 (turn13 첫 프레임)
    84.52s  user  발화 끝
    85.52s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.17s]: The Olmec religion featured a pantheon of gods, with the jaguar as a c
    98.07s  user  발화 시작: 재규어 신… 멋있네. [sigh] 그냥… 이런 고대 것들이 너무 멀게 느껴져.
    98.07s  agent 발화 끝
   104.03s  agent 발화 시작: 그 기분 이해해. 하지만 이 문명들이 추상적인 존재가 아니었다는 걸 기억하는 게 중요해. 우리처럼 가족, 믿
   104.03s  user  발화 끝
   121.37s  user  발화 시작: 그래, 맞는 말이야. 머리 말고 다른 예술 작품은 뭐가 있어?
   121.37s  agent 발화 끝
   126.79s  agent 발화 시작: <ret> 엄청 많아! 거대한 머리 외에도 올멕 사람들은 옥 피규어, 도자기, 신화와 의식을 묘사한 정교한 
   126.79s  <ret> 발화 (turn17 첫 프레임)
   126.79s  user  발화 끝
   127.79s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.17s]: Olmec art also includes jade figurines, pottery, and elaborate stone a
   140.33s  user  발화 시작: 옥 피규어… 부자였어?
   140.33s  agent 발화 끝
   141.96s  agent 발화 시작: 옥은 매우 귀하게 여겨졌으니까, 옥 피규어를 소유하는 건 확실히 지위와 부를 나타내는 거야. 누구나 가질 수
   141.96s  user  발화 끝
   154.42s  user  발화 시작: 그러니까 신분 상징 같은 거네. 다른 문명과 교역했어?
   154.42s  agent 발화 끝
   158.75s  agent 발화 시작: 당연하지! 걔네들은 메소아메리카 전역의 다른 집단과 교역하면서 옥, 흑요석, 도자기 같은 상품을 깃털이나 걔
   158.75s  user  발화 끝
   170.13s  user  발화 시작: 흥미롭네. 무슨 일이 있었어? 어디로 갔어?
   170.13s  agent 발화 끝
   173.38s  agent 발화 시작: <ret> 그건 간단한 대답이 없는 질문이야. 올멕 문명은 기원전 400년경에 쇠퇴했는데, 아마도 환경 변화
   173.38s  <ret> 발화 (turn23 첫 프레임)
   173.38s  user  발화 끝
   174.38s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.79s]: The Olmec civilization declined around 400 BCE, with reasons including
   186.39s  user  발화 시작: 점진적인 변화… 그러니까 걔네들의 영향력이 이어졌다는 거야?
   186.39s  agent 발화 끝
   190.18s  agent 발화 시작: 바로! 걔네들의 예술적, 종교적 전통은 나중에 마야와 아즈텍 문명에 큰 영향을 미쳤어. 걔네들이 메소아메리카
   190.18s  user  발화 끝
   202.10s  agent 발화 끝
